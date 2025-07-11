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

// 추가된 타입 정의
export interface ParagraphData {
  text: string;
  realText?: string;
  align: "left" | "center" | "right" | "justify";
  letterSpacing?: string;
  lineHeight?: string;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  isStrikethrough?: boolean;
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

    if (!this.readOnly) this.onKeyUp = this.onKeyUp.bind(this);

    this._placeholder = config.placeholder || Paragraph.DEFAULT_PLACEHOLDER;
    const { align: defaultAlign } = useEditorStore.getState();

    this._data = {
      ...data,
      align: data.align ?? defaultAlign,
    };
    this._element = null;
    this._preserveBlank = config.preserveBlank ?? false;
  }

  update(data: ParagraphData): void {
    this._data = {
      ...this._data,
      ...data,
    };

    if (this._element) {
      this._element.innerHTML = data.text || "";
      this.applyAlignment(this._element);
    }
  }

  onKeyUp(e: KeyboardEvent): void {
    if ((e.code !== "Backspace" && e.code !== "Delete") || !this._element)
      return;
    if (this._element.textContent === "") {
      this._element.innerHTML = "";
    }
  }

  drawView(): HTMLDivElement {
    const div = document.createElement("div");
    div.classList.add(this._CSS.wrapper, this._CSS.block);
    div.dataset.placeholderActive = this.api.i18n.t(this._placeholder);

    if (this._data.text) {
      // ✅ 기존 span 제거하고 하나의 span으로 재구성
      const mergedText = this._data.text
        .replace(/<span[^>]*>/g, "") // 모든 opening <span ...>
        .replace(/<\/span>/g, "") // 모든 closing </span>
        .trim();

      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.wordBreak = "break-word";
      span.innerHTML = mergedText;

      div.appendChild(span);
    }

    // 스타일 설정
    if (this._data.lineHeight) div.style.lineHeight = this._data.lineHeight;
    if (this._data.letterSpacing)
      div.style.letterSpacing = this._data.letterSpacing;
    if (this._data.fontSize) div.style.fontSize = this._data.fontSize;
    if (this._data.fontFamily) div.style.fontFamily = this._data.fontFamily;
    if (this._data.isBold) div.style.fontWeight = "bold";
    if (this._data.isItalic) div.style.fontStyle = "italic";

    const decorations: string[] = [];
    if (this._data.isUnderline) decorations.push("underline");
    if (this._data.isStrikethrough) decorations.push("line-through");
    if (decorations.length > 0)
      div.style.textDecoration = decorations.join(" ");

    if (!this.readOnly) {
      div.contentEditable = "true";
      div.addEventListener("keyup", this.onKeyUp);
    } else {
      div.contentEditable = "false";
    }

    this.applyAlignment(div);
    return div;
  }

  applyAlignment(element: HTMLDivElement) {
    const align = this._data.align;
    const allowed = ["left", "center", "right", "justify"];

    element.classList.remove(
      "text-align-left",
      "text-align-center",
      "text-align-right",
      "text-align-justify"
    );

    if (allowed.includes(align)) {
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

    if (!this.readOnly && this._element) {
      setTimeout(() => {
        const blockWrapper = this._element?.closest(".ce-block") as HTMLElement;
        const blockId = blockWrapper?.dataset.id;

        if (blockId) {
          this._element?.addEventListener("click", (e) => {
            const {
              addSelectedBlockId,
              clearSelectedBlockIds,
              selectedBlockIds,
            } = useEditorStore.getState();

            if (!e.shiftKey) {
              clearSelectedBlockIds();
              addSelectedBlockId(blockId);
            } else {
              if (!selectedBlockIds.includes(blockId)) {
                addSelectedBlockId(blockId);
              }
            }
          });
        }
      }, 0);
    }

    return this._element;
  }

  merge(data: ParagraphData): void {
    if (!this._element) return;

    // 1. 기존 span + 추가 span을 임시 div에 렌더
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = this._element.innerHTML + data.text;

    // 2. span 합치기
    let combinedHTML = "";
    const spans = Array.from(tempDiv.querySelectorAll("span"));

    spans.forEach((span, idx) => {
      combinedHTML += span.innerHTML;

      // ✅ 첫 span 뒤에 커서 마커 삽입
      if (idx === 0) {
        combinedHTML += '<span id="cursor-marker"></span>';
      }
    });

    // 3. 하나의 span으로 구성
    const unifiedSpan = document.createElement("span");
    unifiedSpan.style.display = "inline-block";
    unifiedSpan.style.wordBreak = "break-word";
    unifiedSpan.innerHTML = combinedHTML;

    this._data.text = unifiedSpan.outerHTML;

    // 4. 기존 렌더링 제거 후 재렌더
    this._element.innerHTML = "";
    this._element.appendChild(unifiedSpan);
    this._element.normalize();

    // 5. 커서 마커 탐지 및 커서 이동
    setTimeout(() => {
      const markerEl = this._element?.querySelector("#cursor-marker");
      if (markerEl) {
        const range = document.createRange();
        const selection = window.getSelection();

        range.setStartAfter(markerEl);
        range.collapse(true);
        selection?.removeAllRanges();
        selection?.addRange(range);

        this._element?.focus();
        markerEl.remove();
      }
    }, 0);
  }

  static get mergeable(): boolean {
    return true;
  }

  validate(savedData: ParagraphData): boolean {
    return !(savedData.text.trim() === "" && !this._preserveBlank);
  }

  getAlignment = (el: HTMLElement): ParagraphData["align"] => {
    const classAlign = (() => {
      if (el.classList.contains("text-align-center")) return "center";
      if (el.classList.contains("text-align-right")) return "right";
      if (el.classList.contains("text-align-justify")) return "justify";
      if (el.classList.contains("text-align-left")) return "left";
      return null;
    })();

    const styleAlign = (el.style.textAlign || "").toLowerCase();
    if (["center", "right", "justify", "left"].includes(styleAlign)) {
      return styleAlign as ParagraphData["align"];
    }

    return (classAlign ?? "left") as ParagraphData["align"];
  };

  extractRealText(el: HTMLElement): string {
    return el.innerText || "";
  }

  wrapOuterSpan(html: string): string {
    const outerSpanRegex = /^<span[^>]*>[\s\S]*<\/span>$/i;

    // 이미 외부 span으로 감싸져 있으면 그대로 반환
    if (outerSpanRegex.test(html.trim())) {
      return html;
    }

    // 없는 경우 wrapping 추가
    return `<span style="display: inline-block; word-break: break-word;">${html}</span>`;
  }

  save(blockContent: HTMLElement) {
    const rawHtml = blockContent.innerHTML;
    const finalHtml = this.wrapOuterSpan(rawHtml);

    return {
      text: finalHtml,
      realText: blockContent.innerText,
      align: this.getAlignment(blockContent) || "left",
      letterSpacing: this._data.letterSpacing || "normal",
      lineHeight: this._data.lineHeight || "normal",
      isBold: this._data.isBold || false,
      isItalic: this._data.isItalic || false,
      isUnderline: this._data.isUnderline || false,
      isStrikethrough: this._data.isStrikethrough || false,
      fontSize: this._data.fontSize || "",
      fontFamily: this._data.fontFamily || "",
    };
  }

  onPaste(event: HTMLPasteEvent): void {
    const rawHtml =
      event.detail.data.innerHTML || event.detail.data.innerText || "";
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, "text/html");
    const cleanText = doc.body.innerText || doc.body.textContent || "";

    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.style.wordBreak = "break-word";
    span.innerText = cleanText;

    const finalHtml = span.outerHTML;

    this._data = {
      text: finalHtml,
      align: this._data.align,
    };

    window.requestAnimationFrame(() => {
      if (this._element) {
        this._element.innerHTML = this._data.text || "";
      }
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
