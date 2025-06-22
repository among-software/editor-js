import "./index.css";

import { IconText } from "@codexteam/icons";
import makeFragment from "./utils/makeFragment";

import type {
  API,
  ConversionConfig,
  HTMLPasteEvent,
  PasteConfig,
  SanitizerConfig,
  ToolConfig,
  ToolboxConfig,
} from "@editorjs/editorjs";
import useEditorStore from "../../../../../store/useEditorStore";

export interface ParagraphConfig extends ToolConfig {
  placeholder?: string;
  preserveBlank?: boolean;
}

export interface ParagraphData {
  text: string;
  realText?: string;
  align: "left" | "center" | "right" | "justify";
  letterSpacing?: string;
  lineHeight?: string;
  isBold?: boolean;
  isItalic?: boolean;
  fontSize?: string;
  fontFamily?: string;
}

interface ParagraphParams {
  data: ParagraphData;
  config?: ParagraphConfig;
  api: API;
  readOnly: boolean;
}

interface ParagraphCSS {
  block: string;
  wrapper: string;
}

export default class Paragraph {
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }

  api: API;
  readOnly: boolean;

  private _CSS: ParagraphCSS;
  private _placeholder: string;
  private _data: ParagraphData;
  private _element: HTMLDivElement | null;
  private _preserveBlank: boolean;

  constructor({ data, config = {}, api, readOnly }: ParagraphParams) {
    this.api = api;
    this.readOnly = readOnly;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph",
    };

    if (!this.readOnly) {
      this.onKeyUp = this.onKeyUp.bind(this);
    }

    this._placeholder = config.placeholder || Paragraph.DEFAULT_PLACEHOLDER;
    const { align: defaultAlign } = useEditorStore.getState();

    this._data = {
      ...data,
      align: data.align ?? defaultAlign,
    };
    this._element = null;
    this._preserveBlank = config.preserveBlank ?? false;
  }

  onKeyUp(e: KeyboardEvent): void {
    if (e.code !== "Backspace" && e.code !== "Delete") return;
    if (!this._element) return;

    const { textContent } = this._element;
    if (textContent === "") {
      this._element.innerHTML = "";
    }
  }

  drawView(): HTMLDivElement {
    const div = document.createElement("DIV") as HTMLDivElement;

    div.classList.add(this._CSS.wrapper, this._CSS.block);
    div.contentEditable = "false";
    div.dataset.placeholderActive = this.api.i18n.t(this._placeholder);

    if (this._data.text) {
      div.innerHTML = this._data.text;
    }

    if (this._data.lineHeight && this._data.lineHeight !== "normal") {
      div.style.lineHeight = this._data.lineHeight;
    }

    if (this._data.letterSpacing && this._data.letterSpacing !== "normal") {
      div.style.letterSpacing = this._data.letterSpacing;
    }

    if (this._data.fontSize) {
      div.style.fontSize = this._data.fontSize;
    }

    if (this._data.fontFamily) {
      div.style.fontFamily = this._data.fontFamily;
    }

    if (this._data.isBold) {
      div.style.fontWeight = "bold";
    }

    if (this._data.isItalic) {
      div.style.fontStyle = "italic";
    }

    if (!this.readOnly) {
      div.contentEditable = "true";
      div.addEventListener("keyup", this.onKeyUp);
    }

    this.applyAlignment(div);
    return div;
  }

  applyAlignment(element: HTMLDivElement) {
    const align = this._data.align;
    const allowedAlignments = ["left", "center", "right", "justify"];

    element.classList.remove(
      "text-align-left",
      "text-align-center",
      "text-align-right",
      "text-align-justify"
    );

    if (allowedAlignments.includes(align)) {
      element.classList.add(`text-align-${align}`);
      element.style.textAlign = align;
    } else {
      element.classList.add("text-align-left");
      element.style.textAlign = "left";
      this._data.align = "left";
    }
  }

  render(): HTMLDivElement {
    this._element = this.drawView();
    return this._element;
  }

  merge(data: ParagraphData): void {
    if (!this._element) return;
    this._data.text += data.text;
    const fragment = makeFragment(data.text);
    this._element.appendChild(fragment);
    this._element.normalize();
  }

  validate(savedData: ParagraphData): boolean {
    if (savedData.text.trim() === "" && !this._preserveBlank) return false;
    return true;
  }

  getAlignment = (el: HTMLElement): ParagraphData["align"] => {
    if (el.classList.contains("text-align-center")) return "center";
    if (el.classList.contains("text-align-right")) return "right";
    if (el.classList.contains("text-align-justify")) return "justify";
    return "left";
  };

  extractRealText(el: HTMLElement): string {
    return el.innerText || "";
  }

  private mergeNestedSpans(root: HTMLElement): HTMLElement {
    const spans = root.querySelectorAll("span");

    if (spans.length <= 1) return root;

    const mergedSpan = document.createElement("span");
    let text = "";

    spans.forEach((span) => {
      // data-* 속성 복사
      Array.from(span.attributes).forEach((attr) => {
        if (attr.name.startsWith("data-")) {
          mergedSpan.setAttribute(attr.name, attr.value);
        }
      });

      // style 병합
      const style = (span as HTMLElement).style;
      if (style.fontSize) mergedSpan.style.fontSize = style.fontSize;
      if (style.fontFamily) mergedSpan.style.fontFamily = style.fontFamily;
      if (style.letterSpacing)
        mergedSpan.style.letterSpacing = style.letterSpacing;
      if (style.lineHeight) mergedSpan.style.lineHeight = style.lineHeight;

      text = span.textContent || text;
    });

    mergedSpan.textContent = text;
    mergedSpan.style.display = "inline-block";
    mergedSpan.style.wordBreak = "break-word";

    root.innerHTML = "";
    root.appendChild(mergedSpan);

    return root;
  }

  save(toolsContent: HTMLDivElement): ParagraphData {
    const textAlign = toolsContent.style.textAlign;
    const align: ParagraphData["align"] =
      textAlign === "center" || textAlign === "right" || textAlign === "justify"
        ? textAlign
        : "left";

    // 1. 중첩된 span 병합
    const mergedContent = this.mergeNestedSpans(
      toolsContent.cloneNode(true) as HTMLElement
    );

    // 2. 병합된 span 선택
    const spanSelectors = [
      "span[data-font-size]",
      "span[style*='font-size']",
      "span[data-font-family]",
      "span[style*='font-family']",
      "span[style*='letter-spacing']",
      "span[style*='line-height']",
    ];
    const targetSpan =
      mergedContent.querySelector(spanSelectors.join(", ")) || mergedContent;

    const computedStyle = window.getComputedStyle(targetSpan as HTMLElement);

    // 3. <b>, <strong>, <i>, <em> 태그로 bold/italic 판단
    const containsBold = !!mergedContent.querySelector("b, strong");
    const containsItalic = !!mergedContent.querySelector("i, em");

    return {
      text: mergedContent.innerHTML,
      realText: this.extractRealText(mergedContent),
      align,
      letterSpacing: computedStyle.letterSpacing || "normal",
      lineHeight: computedStyle.lineHeight || "normal",
      isBold: containsBold,
      isItalic: containsItalic,
      fontSize: computedStyle.fontSize,
      fontFamily: computedStyle.fontFamily,
    };
  }

  onPaste(event: HTMLPasteEvent): void {
    const data = {
      text: event.detail.data.innerHTML,
      align: this._data.align,
    };

    this._data = data;

    window.requestAnimationFrame(() => {
      if (!this._element) return;
      this._element.innerHTML = this._data.text || "";
    });
  }

  static get conversionConfig(): ConversionConfig {
    return {
      export: "text",
      import: "text",
    };
  }

  static get sanitize(): SanitizerConfig {
    return {
      text: {
        br: true,
      },
    };
  }

  static get isReadOnlySupported(): boolean {
    return true;
  }

  static get pasteConfig(): PasteConfig {
    return {
      tags: ["P"],
    };
  }

  static get toolbox(): ToolboxConfig {
    return {
      icon: IconText,
      title: "본문",
    };
  }
}
