/**
 * Build styles
 */
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
  align: "left" | "center" | "right" | "justify";
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

    this._placeholder = config.placeholder
      ? config.placeholder
      : Paragraph.DEFAULT_PLACEHOLDER;

    const { align } = useEditorStore.getState();
    this._data = {
      ...data,
      align: align,
    };
    this._element = null;
    this._preserveBlank = config.preserveBlank ?? false;
  }

  onKeyUp(e: KeyboardEvent): void {
    if (e.code !== "Backspace" && e.code !== "Delete") {
      return;
    }

    if (!this._element) {
      return;
    }

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

    if (!this.readOnly) {
      div.contentEditable = "true";
      div.addEventListener("keyup", this.onKeyUp);
    }

    this.applyAlignment(div);

    return div as HTMLDivElement;
  }

  applyAlignment(element: HTMLDivElement) {
    // 모든 기존 정렬 클래스 제거
    element.classList.remove(
      "text-align-left",
      "text-align-center",
      "text-align-right",
      "text-align-justify"
    );

    // 현재 정렬 클래스 추가
    const align = this._data.align;
    const allowedAlignments = ["left", "center", "right", "justify"];

    if (allowedAlignments.includes(align)) {
      element.classList.add(`text-align-${align}`);
    } else {
      // 기본 fallback
      element.classList.add("text-align-left");
      this._data.align = "left";
    }
  }

  render(): HTMLDivElement {
    this._element = this.drawView();

    return this._element;
  }

  merge(data: ParagraphData): void {
    if (!this._element) {
      return;
    }

    this._data.text += data.text;

    const fragment = makeFragment(data.text);

    this._element.appendChild(fragment);

    this._element.normalize();
  }

  validate(savedData: ParagraphData): boolean {
    if (savedData.text.trim() === "" && !this._preserveBlank) {
      return false;
    }

    return true;
  }

  getAlignment = (el: HTMLElement): ParagraphData["align"] => {
    if (el.classList.contains("text-align-center")) return "center";
    if (el.classList.contains("text-align-right")) return "right";
    if (el.classList.contains("text-align-justify")) return "justify";
    return "left";
  };

  save(toolsContent: HTMLDivElement): ParagraphData {
    const textAlign = toolsContent.style.textAlign;

    const align: ParagraphData["align"] =
      textAlign === "center" || textAlign === "right" || textAlign === "justify"
        ? textAlign
        : "left"; // fallback

    return {
      text: toolsContent.innerHTML,
      align,
    };
  }

  onPaste(event: HTMLPasteEvent): void {
    const data = {
      text: event.detail.data.innerHTML,
      align: this._data.align,
    };

    this._data = data;

    window.requestAnimationFrame(() => {
      if (!this._element) {
        return;
      }
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
