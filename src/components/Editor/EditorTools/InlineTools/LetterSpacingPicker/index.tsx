export default class LetterSpacingPicker {
  static isInline = true;
  static title = "자간 설정";

  private api: any;
  private currentSpacing: string = "normal";
  private range: Range | null = null;
  private data: { letterSpacing: string } = { letterSpacing: "normal" };
  private tag = "SPAN";

  private spacingOptions: string[] = [
    "normal",
    ...Array.from({ length: 16 }, (_, i) => `${i + 1}px`),
  ];

  constructor({ api }: { api: any }) {
    this.api = api;
  }

  public render(): HTMLElement {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("cdx-letter-spacing-button");
    button.innerText = "자간";
    button.style.padding = "2px 4px";
    button.style.marginRight = "12px";
    button.style.borderRadius = "4px";
    button.style.border = "1px solid black";
    return button;
  }

  public renderActions(): HTMLElement {
    const container = document.createElement("ul");
    container.className = "letter-spacing-dropdown";

    this.spacingOptions.forEach((spacing) => {
      const li = document.createElement("li");
      li.className = "letter-spacing-option";
      li.dataset.spacing = spacing;

      // 📌 숫자 + 단위 텍스트
      const label = document.createElement("span");
      label.textContent = spacing === "normal" ? "기본" : spacing;
      label.style.display = "inline-block";
      label.style.width = "50px";
      label.style.fontFamily = "inherit";

      // 📌 미리보기 텍스트
      const preview = document.createElement("span");
      preview.textContent = "가나다";
      preview.style.letterSpacing = spacing === "normal" ? "normal" : spacing;
      preview.style.marginLeft = "12px";
      preview.style.fontFamily = "inherit";

      // 📌 전체 li 스타일
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
        this.applyLetterSpacing(spacing);
      });

      container.appendChild(li);
    });

    return container;
  }

  public surround(range: Range): void {
    this.range = range;
  }

  private applyLetterSpacing(spacing: string) {
    this.data.letterSpacing = spacing;

    if (!this.range || this.range.collapsed) return;

    const existing = this.findAncestorSpan(this.range.startContainer);

    // ✅ 자간이 동일하면 아무것도 안 함
    if (existing?.dataset?.letterSpacing === spacing) return;

    // ✅ 자간 span이 존재하면 update만 수행
    if (existing) {
      existing.style.letterSpacing = spacing;
      existing.setAttribute("data-letter-spacing", spacing);
      return;
    }

    // ✅ 없으면 새로 wrap
    this.wrap(this.range, spacing);
  }

  private wrap(range: Range, spacing: string) {
    const span = document.createElement(this.tag);
    span.style.letterSpacing = spacing;
    span.setAttribute("data-letter-spacing", spacing);
    span.style.display = "inline-block";
    span.style.wordBreak = "break-word";

    const contents = range.extractContents();
    this.flattenSpans(contents);

    span.appendChild(contents);
    range.insertNode(span);

    this.api.selection.expandToTag(span);
  }

  private unwrap(span: HTMLElement) {
    this.api.selection.expandToTag(span);
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;

    const range = sel.getRangeAt(0);
    const content = range.extractContents();
    span.remove();
    range.insertNode(content);

    sel.removeAllRanges();
    sel.addRange(range);
  }

  private flattenSpans(node: Node) {
    if (node instanceof DocumentFragment || node instanceof Element) {
      const spans = node.querySelectorAll("span[data-letter-spacing]");
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
      if (el.tagName === "SPAN" && el.hasAttribute("data-letter-spacing")) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }

  public checkState(): boolean {
    const tag = this.api.selection.findParentTag(
      this.tag,
      "cdx-letter-spacing"
    );
    if (tag) {
      const spacing = tag.getAttribute("data-letter-spacing") || "normal";
      this.currentSpacing = spacing;
    } else {
      this.currentSpacing = "normal";
    }
    return false;
  }

  public static get sanitize() {
    return {
      span: {
        style: true,
        "data-letter-spacing": true,
      },
    };
  }

  public get toolboxIcon(): string {
    return "자간";
  }
}
