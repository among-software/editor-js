import {
  API,
  BlockTool,
  BlockToolConstructorOptions,
  BlockToolData,
  ToolboxConfig,
} from "@editorjs/editorjs";

export default class IframeBlock implements BlockTool {
  private api: API;
  private data: { url: string; caption?: string };
  private _element: HTMLDivElement;

  constructor({ data, api }: BlockToolConstructorOptions) {
    this.api = api;
    this.data = data || { url: "", caption: "" };
    this._element = this.renderIframe();
  }

  render(): HTMLElement {
    return this._element;
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    const isCaption = e.target instanceof HTMLInputElement;

    if (e.key === "Backspace" && !isCaption) {
      e.preventDefault();
      this.api.blocks.delete();
    }
  };

  private renderIframe(): HTMLDivElement {
    const wrapper = document.createElement("div");
    wrapper.classList.add("ce-iframe", this.api.styles.block);
    wrapper.tabIndex = 0;
    wrapper.style.position = "relative";
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";

    const overlay = document.createElement("div");
    overlay.className = "ce-iframe__overlay";
    overlay.style.position = "absolute";
    overlay.style.inset = "0";
    overlay.style.border = "2px solid #00b8b2";
    overlay.style.borderRadius = "8px";
    overlay.style.pointerEvents = "none";
    overlay.style.display = "none";

    const iframe = document.createElement("iframe");
    iframe.src = this.data.url;
    iframe.allowFullscreen = true;
    iframe.style.width = "100%";
    iframe.style.maxWidth = "720px";
    iframe.style.aspectRatio = "16 / 9";
    iframe.style.border = "none";
    iframe.style.borderRadius = "8px";
    iframe.style.margin = "0 auto";

    const caption = document.createElement("input");
    caption.className = "iframe-caption";
    caption.placeholder = "iframe을 설명해보세요";
    caption.value = this.data.caption || "";
    caption.style.marginTop = "8px";
    caption.style.width = "100%";
    caption.style.maxWidth = "720px";
    caption.style.textAlign = "center";
    caption.addEventListener("input", (e) => {
      this.data.caption = (e.target as HTMLInputElement).value;
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "✕";
    deleteButton.style.position = "absolute";
    deleteButton.style.top = "8px";
    deleteButton.style.right = "8px";
    deleteButton.style.background = "#ff4d4f";
    deleteButton.style.border = "none";
    deleteButton.style.color = "white";
    deleteButton.style.borderRadius = "50%";
    deleteButton.style.width = "24px";
    deleteButton.style.height = "24px";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.display = "none";
    deleteButton.title = "삭제";

    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("✕ 삭제 버튼 클릭됨");
      this.api.blocks.delete();
    });

    wrapper.appendChild(iframe);
    wrapper.appendChild(overlay);
    wrapper.appendChild(deleteButton);
    wrapper.appendChild(caption);

    const activate = () => {
      overlay.style.display = "block";
      deleteButton.style.display = "block";
      wrapper.classList.add("ce-iframe--active");
    };

    const deactivate = () => {
      overlay.style.display = "none";
      deleteButton.style.display = "none";
      wrapper.classList.remove("ce-iframe--active");
    };

    wrapper.addEventListener("click", (e) => {
      e.stopPropagation();
      activate();

      const onKeyDown = (e: KeyboardEvent) => {
        const isInput = e.target instanceof HTMLInputElement;
        if ((e.key === "Backspace" || e.key === "Delete") && !isInput) {
          e.preventDefault();
          this.api.blocks.delete();
          document.removeEventListener("keydown", onKeyDown);
        }
      };

      document.removeEventListener("keydown", onKeyDown);
      document.addEventListener("keydown", onKeyDown);
    });

    document.addEventListener(
      "click",
      (e: MouseEvent) => {
        if (!wrapper.contains(e.target as Node)) {
          deactivate();
        }
      },
      true
    );

    return wrapper;
  }

  save(): BlockToolData {
    return this.data;
  }

  static get toolbox(): ToolboxConfig {
    return {
      title: "Iframe",
      icon: "🌐",
    };
  }
}
