import "./index.css";
class BackgroundColorPicker {
    static get CSS() {
        return "cdx-background-color-picker";
    }
    constructor(options) {
        this.tag = "SPAN";
        this.colors = [];
        this.range = null;
        this.currentColor = null;
        this.api = options.api;
        this.iconClasses = {
            base: this.api.styles.inlineToolButton,
            active: this.api.styles.inlineToolButtonActive,
        };
        if (options.config && options.config.colorCollections) {
            this.colors = options.config.colorCollections;
        }
    }
    render() {
        this.button = document.createElement("button");
        this.button.type = "button";
        this.button.classList.add(this.iconClasses.base, "background-color-picker-btn");
        const textIcon = document.createElement("span");
        textIcon.classList.add("text-icon");
        textIcon.textContent = this.toolboxIcon;
        this.button.appendChild(textIcon);
        return this.button;
    }
    renderActions() {
        const colorPickerContainer = document.createElement("div");
        colorPickerContainer.classList.add("color-picker-container");
        this.colors.forEach((color) => {
            const colorBox = document.createElement("div");
            colorBox.classList.add("color-box");
            colorBox.style.backgroundColor = color;
            colorBox.addEventListener("click", () => {
                this.customSurround(color);
                this.updateToolboxIcon();
            });
            colorPickerContainer.appendChild(colorBox);
        });
        return colorPickerContainer;
    }
    surround(range) {
        if (!range) {
            return;
        }
        this.range = range;
    }
    customSurround(color) {
        const termWrapper = this.api.selection.findParentTag(this.tag, BackgroundColorPicker.CSS);
        if (termWrapper) {
            this.unwrap(termWrapper);
        }
        else {
            this.wrap(color);
        }
        this.currentColor = color;
    }
    wrap(color) {
        const span = document.createElement(this.tag);
        span.classList.add(BackgroundColorPicker.CSS);
        if (color) {
            span.style.backgroundColor = color;
            this.currentColor = color;
        }
        if (this.range) {
            const content = this.range.extractContents();
            this.flattenSpans(content);
            span.appendChild(content);
            this.range.deleteContents();
            this.range.insertNode(span);
            this.api.selection.expandToTag(span);
        }
    }
    // 중첩된 <span> 요소를 텍스트 노드로 변환하는 메서드
    flattenSpans(node) {
        if (node instanceof DocumentFragment || node instanceof Element) {
            const spans = node.querySelectorAll("span.cdx-background-color-picker");
            spans.forEach((span) => {
                if (span.parentNode) {
                    const textNode = document.createTextNode(span.textContent || "");
                    span.parentNode.replaceChild(textNode, span);
                }
            });
        }
    }
    unwrap(termWrapper) {
        this.api.selection.expandToTag(termWrapper);
        const sel = window.getSelection();
        if (!sel) {
            return;
        }
        const range = sel.getRangeAt(0);
        if (!range) {
            return;
        }
        const unwrappedContent = range.extractContents();
        termWrapper.parentNode?.removeChild(termWrapper);
        range.insertNode(unwrappedContent);
        sel.removeAllRanges();
        sel.addRange(range);
    }
    checkState() {
        const termTag = this.api.selection.findParentTag(this.tag, BackgroundColorPicker.CSS);
        if (!termTag) {
            this.currentColor = "transparent";
            this.updateToolboxIcon();
        }
        if (termTag) {
            const color = termTag.style.backgroundColor;
            this.currentColor = color;
            this.updateToolboxIcon();
        }
        return false;
    }
    updateToolboxIcon() {
        if (this.button) {
            this.button.style.backgroundColor = this.currentColor ?? "transparent";
            if (this.currentColor !== "transparent" || !this.currentColor) {
                this.button.style.color = "#ffffff";
                this.button.style.border = "none";
            }
            if (this.currentColor === "#ffffff" ||
                this.currentColor === "rgb(255, 255, 255)") {
                this.button.style.color = "#000000";
                this.button.style.border = "1px solid #ccc";
            }
        }
    }
    get toolboxIcon() {
        return "A";
    }
    static get sanitize() {
        return {
            span: {
                class: BackgroundColorPicker.CSS,
                style: true,
            },
        };
    }
}
BackgroundColorPicker.isInline = true;
export default BackgroundColorPicker;
