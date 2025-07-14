export default class LineHeightPicker {
  static isInline = true;
  static title = "줄간격 설정";

  private api: any;
  private range: Range | null = null;
  private currentLineHeight: string = "normal";
  private data: { lineHeight: string } = { lineHeight: "normal" };
  private tag = "SPAN";

  private lineHeightOptions: string[] = [
    "normal",
    "1",
    "1.2",
    "1.5",
    "1.75",
    "2",
    "2.5",
    "3",
  ];

  constructor({ api }: { api: any }) {
    this.api = api;
  }

  public render(): HTMLElement {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("cdx-line-height-button");
    button.style.padding = "2px 4px";
    button.style.marginRight = "12px";
    button.style.borderRadius = "4px";
    button.style.border = "1px solid black";
    button.innerText = "행간";
    return button;
  }

  public renderActions(): HTMLElement {
    const container = document.createElement("ul");
    container.className = "line-height-dropdown";

    this.lineHeightOptions.forEach((lineHeight) => {
      const li = document.createElement("li");
      li.className = "line-height-option";
      li.dataset.lineHeight = lineHeight;

      const label = document.createElement("span");
      label.textContent = lineHeight === "normal" ? "기본" : lineHeight;
      label.style.display = "inline-block";
      label.style.width = "50px";
      label.style.fontFamily = "inherit";

      const preview = document.createElement("span");
      preview.textContent = "가나다";
      preview.style.lineHeight = lineHeight;
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
        this.applyLineHeight(lineHeight);
      });

      container.appendChild(li);
    });

    return container;
  }

  public surround(range: Range): void {
    this.range = range;
  }

  private applyLineHeight(lineHeight: string) {
    this.data.lineHeight = lineHeight;

    if (!this.range || this.range.collapsed) return;

    const existing = this.findAncestorSpan(this.range.startContainer);

    if (existing?.dataset?.lineHeight === lineHeight) return;

    if (existing) {
      existing.style.lineHeight = lineHeight;
      existing.setAttribute("data-line-height", lineHeight);
      return;
    }

    this.wrap(this.range, lineHeight);
  }

  private wrap(range: Range, lineHeight: string) {
    const contents = range.extractContents();

    // 기존 span 중 data-line-height가 있는 경우 제거 (중복 방지)
    this.flattenSpans(contents);

    // 텍스트 노드만 있는 경우 처리
    const span = document.createElement(this.tag);
    span.setAttribute("data-line-height", lineHeight);
    span.style.lineHeight = lineHeight;

    // 다른 스타일이 적용되어 있다면 보존
    span.style.display = "inline";
    span.style.wordBreak = "break-word";

    // 병합을 위해 기존 span이 하나뿐이라면 재사용 (선택적으로 구현 가능)
    span.appendChild(contents);
    range.insertNode(span);

    // selection 유지
    this.api.selection.expandToTag(span);
  }

  private flattenSpans(node: Node) {
    if (node instanceof DocumentFragment || node instanceof Element) {
      const spans = node.querySelectorAll("span[data-line-height]");
      spans.forEach((span) => {
        const parent = span.parentNode;
        while (span.firstChild) {
          parent?.insertBefore(span.firstChild, span);
        }
        parent?.removeChild(span);
      });
    }
  }

  private findAncestorSpan(node: Node): HTMLElement | null {
    let el = node.parentElement;
    while (el) {
      if (el.tagName === "SPAN" && el.hasAttribute("data-line-height")) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }

  public checkState(): boolean {
    const tag = this.api.selection.findParentTag(this.tag, "cdx-line-height");
    if (tag) {
      const lineHeight = tag.getAttribute("data-line-height") || "normal";
      this.currentLineHeight = lineHeight;
    } else {
      this.currentLineHeight = "normal";
    }
    return false;
  }

  public static get sanitize() {
    return {
      span: {
        style: true,
        "data-line-height": true,
      },
    };
  }

  public get toolboxIcon(): string {
    return "행간";
  }
}
