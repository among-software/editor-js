class FontSizePicker {
    constructor({ data }) {
        this.data = { size: "14px" };
        this.data = data || { size: "14px" };
        this.select = document.createElement("select");
        const sizes = [
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
        sizes.forEach((size) => {
            const option = document.createElement("option");
            option.value = size;
            option.textContent = size.replace("px", "");
            this.select.appendChild(option);
        });
        this.select.className = "font-size-dropdown";
        this.select.value = this.data.size;
        this.select.addEventListener("mousedown", (e) => {
            e.stopPropagation();
        });
        this.select.addEventListener("change", () => {
            this.data.size = this.select.value;
            const selection = window.getSelection();
            if (!selection || selection.rangeCount === 0)
                return;
            const range = selection.getRangeAt(0);
            const span = document.createElement("span");
            span.style.fontSize = this.data.size;
            span.style.display = "inline-block";
            span.style.wordBreak = "break-word";
            span.appendChild(range.extractContents());
            range.deleteContents();
            range.insertNode(span);
            const newRange = document.createRange();
            newRange.selectNodeContents(span);
            newRange.collapse(false);
            selection.removeAllRanges();
            selection.addRange(newRange);
        });
    }
    render() {
        return this.select;
    }
    surround(range) {
        const span = document.createElement("span");
        span.style.fontSize = this.data.size;
        span.style.display = "inline-block";
        span.style.wordBreak = "break-word";
        span.appendChild(range.extractContents());
        range.insertNode(span);
    }
    checkState(selection) {
        if (!selection || selection.rangeCount === 0)
            return;
        const range = selection.getRangeAt(0);
        const container = range.startContainer;
        const element = container.nodeType === 3
            ? container.parentElement
            : container;
        if (element && element.style && element.style.fontSize) {
            this.select.value = element.style.fontSize;
            this.data.size = element.style.fontSize;
        }
    }
    renderActions() {
        return null;
    }
    save() {
        return this.data;
    }
}
FontSizePicker.isInline = true;
FontSizePicker.title = "FontSize";
FontSizePicker.sanitize = {
    span: (el) => ({
        style: el.getAttribute("style") || "",
    }),
};
export default FontSizePicker;
/* CSS (추가 필요)
.font-size-dropdown {
  max-width: 120px;
  min-width: 60px;
  font-size: 13px;
  white-space: nowrap;
}

.ce-block__content span[style*="font-size"] {
  display: inline-block;
  word-break: break-word;
  line-height: 1.3;
  max-width: 100%;
}*/
