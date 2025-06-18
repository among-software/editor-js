import "./index.css";
class ColorPicker {
    static get CSS() {
        return "cdx-color-picker";
    }
    constructor(options) {
        this.tag = "SPAN";
        this.colors = [];
        this.range = null;
        this.currentColor = "transparent";
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
        this.button.classList.add(this.iconClasses.base, "color-picker-btn");
        this.colorPreview = document.createElement("span");
        this.colorPreview.classList.add("color-preview");
        const textIcon = document.createElement("span");
        textIcon.classList.add("text-icon");
        textIcon.textContent = this.toolboxIcon;
        this.button.appendChild(textIcon);
        this.button.appendChild(this.colorPreview);
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
        const termWrapper = this.api.selection.findParentTag(this.tag, ColorPicker.CSS);
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
        span.classList.add(ColorPicker.CSS);
        if (color) {
            span.style.color = color;
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
            const spans = node.querySelectorAll("span.cdx-color-picker");
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
        const termTag = this.api.selection.findParentTag(this.tag, ColorPicker.CSS);
        if (termTag) {
            const color = termTag.style.color;
            this.currentColor = color;
            this.updateToolboxIcon();
        }
        return false;
    }
    updateToolboxIcon() {
        if (this.colorPreview) {
            this.colorPreview.style.backgroundColor = this.currentColor;
        }
    }
    get toolboxIcon() {
        return "A";
    }
    static get sanitize() {
        return {
            span: {
                class: ColorPicker.CSS,
                style: true,
            },
        };
    }
}
ColorPicker.isInline = true;
export default ColorPicker;
