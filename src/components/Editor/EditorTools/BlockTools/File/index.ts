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

export default class File implements BlockTool {
  tunes: { align: "left" | "center" | "right" | "justify" } = { align: "left" };
  static get isReadOnlySupported(): boolean {
    return true;
  }

  static get contentless(): boolean {
    return true;
  }

  private api: API;

  private _CSS: {
    block: string;
    wrapper: string;
    file: string;
    fileContainer: string;
    fileIcon: string;
    fileName: string;
    active: string;
  };

  private data: BlockToolData;

  private _element: HTMLDivElement;

  constructor({ data, api }: BlockToolConstructorOptions) {
    this.api = api;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-file",
      file: "file-wrapper",
      fileContainer: "file-container",
      fileIcon: "file-icon",
      fileName: "file-name",
      active: "ce-file--active",
    };

    const { align } = useEditorStore.getState();
    this.data = {
      ...data,
      align: align,
    };

    this.tunes.align = align || "left";

    this._element = this.drawView();
  }

  drawView(): HTMLDivElement {
    const wrapper = document.createElement("div");
    const file = document.createElement("div");
    const fileContainer = document.createElement("div");
    const fileIcon = document.createElement("div");
    const fileName = document.createElement("p");

    wrapper.classList.add(this._CSS.wrapper, this._CSS.block);
    file.classList.add(this._CSS.file);
    fileContainer.classList.add(this._CSS.fileContainer);
    fileIcon.classList.add(this._CSS.fileIcon);
    fileName.classList.add(this._CSS.fileName);

    file.addEventListener("click", () => {
      fileContainer.classList.add(this._CSS.active);
      document.addEventListener("keydown", this.handleKeyDown);
    });

    document.addEventListener(
      "click",
      (e: Event) => {
        if (!this._element.contains(e.target as Node)) {
          fileContainer.classList.remove(this._CSS.active);
          document.removeEventListener("keydown", this.handleKeyDown);
        }
      },
      true
    );

    if (this.data) {
      fileName.innerText = this.data.name;
      fileContainer.appendChild(fileIcon);
      fileContainer.appendChild(fileName);
      file.appendChild(fileContainer);
      wrapper.appendChild(file);
    }

    this.applyAlignment(file);

    return wrapper;
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      this.api.blocks.delete();
    }
  };

  applyAlignment(element: HTMLDivElement) {
    element.classList.remove("align-left", "align-center");

    if (this.data.align === "center") {
      element.classList.add("align-center");
    }

    if (this.data.align === "left") {
      element.classList.add("align-left");
    }
  }

  render(): HTMLDivElement {
    return this._element;
  }

  save(): BlockToolData {
    return {
      url: this.data.url,
      name: this.data.name,
      type: this.data.type,
      size: this.data.size,
      align: this.data.align,
    };
  }

  static get toolbox(): ToolboxConfig {
    return {
      icon: "🖼️",
      title: "file",
    };
  }

  static get pasteConfig(): PasteConfig {
    return { tags: ["INPUT"] };
  }

  onPaste(): void {
    this.data = {};
  }
}
