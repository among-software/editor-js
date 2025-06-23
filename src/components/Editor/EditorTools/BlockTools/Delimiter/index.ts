import useEditorStore from "../../../../../store/useEditorStore";
import "./index.css";
import {
  API,
  BlockTool,
  BlockToolConstructorOptions,
  BlockToolData,
  ToolboxConfig,
  PasteConfig,
} from "@editorjs/editorjs";

export default class Delimiter implements BlockTool {
  static get isReadOnlySupported(): boolean {
    return true;
  }

  static get contentless(): boolean {
    return true;
  }

  private api: API;
  private data: BlockToolData;
  private _element: HTMLDivElement;

  private _CSS = {
    block: "",
    wrapper: "ce-delimiter",
    delimiter: "delimiter",
    active: "ce-delimiter--active",
  };

  constructor({ data, api }: BlockToolConstructorOptions) {
    this.api = api;
    this._CSS.block = this.api.styles.block;

    const { align } = useEditorStore.getState();
    this.data = {
      ...data,
      align: data?.align || align || "center",
      url: data?.url || "", // 기본 URL은 외부에서 들어옴
      imagePosition: data?.imagePosition || "50% 50%",
    };

    this._element = this.drawView();
  }

  drawView(): HTMLDivElement {
    const wrapper = document.createElement("div");
    const delimiter = document.createElement("hr");

    wrapper.classList.add(this._CSS.wrapper, this._CSS.block);
    wrapper.style.textAlign = this.data.align;
    wrapper.style.position = "relative";

    delimiter.classList.add(this._CSS.delimiter);
    delimiter.style.display = "block";
    delimiter.style.width = "100%";
    delimiter.style.height = "24px";
    delimiter.style.border = "none";
    delimiter.style.backgroundRepeat = "no-repeat";
    delimiter.style.backgroundImage = `url(${this.data.url})`;

    // backgroundPosition만 정렬에 따라 설정
    switch (this.data.align) {
      case "left":
        delimiter.style.backgroundPosition = "8px center";
        break;
      case "center":
        delimiter.style.backgroundPosition = "center";
        break;
      case "right":
        delimiter.style.backgroundPosition = "calc(100% - 8px) center";
        break;
    }

    // ✅ 정렬 모달
    const alignModal = document.createElement("div");
    alignModal.className = "image-align-modal";
    alignModal.style.display = "none";

    const alignOptions = ["left", "center", "right"];
    const getIconUrl = (align: string, isHover = false) => {
      const suffix = isHover ? "-hover.svg" : ".svg";
      return `https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_96c6313b6d6a405b9511658326418a69/lotte-foundation/${align}${suffix}`;
    };

    alignOptions.forEach((option) => {
      const btn = document.createElement("button");
      btn.className = "image-align-modal-button";
      btn.style.backgroundImage = `url('${getIconUrl(option)}')`;
      btn.style.backgroundRepeat = "no-repeat";
      btn.style.backgroundSize = "20px 20px";
      btn.style.backgroundPosition = "center";

      btn.addEventListener("click", () => {
        this.data.align = option;
        this.updateView();
      });

      btn.addEventListener("mouseenter", () => {
        btn.style.backgroundImage = `url('${getIconUrl(option, true)}')`;
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.backgroundImage = `url('${getIconUrl(option, false)}')`;
      });

      alignModal.appendChild(btn);
    });

    // ✅ 클릭 시 정렬 모달 표시 + 강조 효과
    delimiter.addEventListener("click", (e) => {
      e.stopPropagation();
      this._element.classList.add(this._CSS.active);
      alignModal.style.display = "flex";
      document.addEventListener("keydown", this.handleKeyDown);
    });

    // 외부 클릭 시 정렬 모달 제거 + 강조 제거
    document.addEventListener(
      "click",
      (e: Event) => {
        if (!this._element.contains(e.target as Node)) {
          this._element.classList.remove(this._CSS.active);
          alignModal.style.display = "none";
          document.removeEventListener("keydown", this.handleKeyDown);
        }
      },
      true
    );

    wrapper.appendChild(alignModal);
    wrapper.appendChild(delimiter);
    return wrapper;
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      this.api.blocks.delete();
    }
  };

  updateView(): void {
    const newElement = this.drawView();
    this._element.replaceWith(newElement);
    this._element = newElement;
  }

  render(): HTMLDivElement {
    return this._element;
  }

  save(): BlockToolData {
    return {
      url: this.data.url,
      imagePosition: this.data.imagePosition,
      align: this.data.align,
    };
  }

  static get toolbox(): ToolboxConfig {
    return {
      icon: "⎯",
      title: "Delimiter",
    };
  }

  static get pasteConfig(): PasteConfig {
    return { tags: ["HR"] };
  }

  onPaste(): void {
    this.data = {};
  }
}
