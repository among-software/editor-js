export default class FontSizePicker {
  static isInline = true;
  static title = "글자 크기";

  private api: any;
  private range: Range | null = null;
  private currentFontSize: string = "14px";
  private data: { fontSize: string } = { fontSize: "14px" };
  private tag = "SPAN";
  private sizeOptions: string[] = [
    "12px",
    "14px",
    "16px",
    "18px",
    "20px",
    "24px",
    "32px",
    "48px",
    "64px",
  ];

  constructor({ api }: { api: any }) {
    this.api = api;
  }

  public render(): HTMLElement {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("cdx-font-size-button");
    button.innerText = "A→a";
    button.style =
      "padding: 4px; margin-right: 12px; border-radius: 4px; border: 1px solid black;";
    return button;
  }

  public renderActions(): HTMLElement {
    const container = document.createElement("ul");
    container.className = "font-size-dropdown";

    this.sizeOptions.forEach((fontSize) => {
      const li = document.createElement("li");
      li.className = "font-size-option";
      li.dataset.fontSize = fontSize;

      const label = document.createElement("span");
      label.textContent = fontSize;
      label.style.display = "inline-block";
      label.style.width = "50px";
      label.style.fontFamily = "inherit";

      const preview = document.createElement("span");
      preview.textContent = "가나다";
      preview.style.fontSize = fontSize;
      preview.style.marginLeft = "12px";
      preview.style.fontFamily = "inherit";

      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.padding = "6px 12px";
      li.style.cursor = "pointer";
      li.style.fontSize = "14px";
      li.style.lineHeight = "1.5";
      li.style.whiteSpace = "nowrap";

      li.appendChild(label);
      li.appendChild(preview);

      li.addEventListener("mousedown", (e) => e.stopPropagation());
      li.addEventListener("click", () => {
        if (!this.range || this.range.collapsed) {
          const blocks = this.api.blocks;
          const lastIndex = blocks.getBlocksCount() - 1;
          const lastBlock = blocks.getBlockByIndex(lastIndex);

          if (lastBlock) {
            const lastBlockHolder = lastBlock.holder;
            const editable = lastBlockHolder.querySelector(
              "[contenteditable=true]"
            );

            if (editable) {
              const spans = editable.querySelectorAll("span[data-font-size]");
              const targetSpan = spans[spans.length - 1];
              const range = document.createRange();
              const selection = window.getSelection();

              if (targetSpan) {
                range.selectNodeContents(targetSpan);
                range.collapse(false);
              } else {
                const lastChild = editable.lastChild;
                if (lastChild) {
                  range.setStartAfter(lastChild);
                  range.collapse(true);
                } else {
                  range.selectNodeContents(editable);
                  range.collapse(false);
                }
              }

              if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
              }

              this.range = range;
            }
          }
        }
        this.applyFontSize(fontSize);
      });

      container.appendChild(li);
    });

    return container;
  }

  public surround(range: Range): void {
    this.range = range;
  }

  private applyFontSize(fontSize: string) {
    this.data.fontSize = fontSize;

    if (!this.range || this.range.collapsed) return;

    const existing = this.findAncestorSpan(this.range.startContainer);

    if (existing?.dataset?.fontSize === fontSize) return;

    if (existing) {
      existing.style.fontSize = fontSize;
      existing.setAttribute("data-font-size", fontSize);
      return;
    }

    this.wrap(this.range, fontSize);
  }

  private wrap(range: Range, fontSize: string) {
    const span = document.createElement(this.tag);
    span.style.fontSize = fontSize;
    span.setAttribute("data-font-size", fontSize);
    span.style.display = "inline-block";
    span.style.wordBreak = "break-word";

    const contents = range.extractContents();
    this.flattenSpans(contents);

    span.appendChild(contents);
    range.insertNode(span);

    const selection = window.getSelection();
    if (selection) {
      const newRange = document.createRange();
      newRange.selectNodeContents(span);
      newRange.collapse(false);
      selection.removeAllRanges();
      selection.addRange(newRange);
      this.range = newRange;
    }
  }

  private flattenSpans(node: Node) {
    if (node instanceof DocumentFragment || node instanceof Element) {
      const spans = node.querySelectorAll("span[data-font-size]");
      spans.forEach((span) => {
        if (span.parentNode) {
          const textNode = document.createTextNode(span.textContent || "");
          span.parentNode.replaceChild(textNode, span);
        }
      });
    }
  }

  private findAncestorSpan(node: Node): HTMLElement | null {
    let el = node.parentElement;
    while (el) {
      if (el.tagName === "SPAN" && el.hasAttribute("data-font-size")) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }

  public checkState(): boolean {
    const tag = this.api.selection.findParentTag(this.tag, "cdx-font-size");
    if (tag) {
      const fontSize = tag.getAttribute("data-font-size") || "14px";
      this.currentFontSize = fontSize;
    } else {
      this.currentFontSize = "14px";
    }
    return false;
  }

  public static get sanitize() {
    return {
      span: {
        style: true,
        "data-font-size": true,
      },
    };
  }

  public get toolboxIcon(): string {
    return "A→a";
  }
}
