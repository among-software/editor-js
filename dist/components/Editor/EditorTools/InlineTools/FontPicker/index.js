import "./index.css";
import { IconChevronDown } from "@codexteam/icons";
class FontPicker {
    static get CSS() {
        return "cdx-font-picker";
    }
    constructor(options) {
        this.tag = "SPAN";
        this.range = null;
        this.currentFont = null;
        this.fontPickerContainer = null;
        this.api = options.api;
        this.iconClasses = {
            base: this.api.styles.inlineToolButton,
            active: this.api.styles.inlineToolButtonActive,
        };
    }
    render() {
        const buttonWrapper = document.createElement("button");
        buttonWrapper.classList.add("font-picker-wrapper");
        buttonWrapper.classList.add(this.iconClasses.base);
        buttonWrapper.type = "button";
        this.button = document.createElement("div");
        const fontIcon = document.createElement("span");
        fontIcon.classList.add("font-icon");
        fontIcon.textContent = this.toolboxIcon;
        this.button.appendChild(fontIcon);
        const dropdownIcon = document.createElement("div");
        dropdownIcon.classList.add("dropdown-icon");
        dropdownIcon.innerHTML = `${IconChevronDown}`;
        buttonWrapper.appendChild(this.button);
        buttonWrapper.appendChild(dropdownIcon);
        return buttonWrapper;
    }
    renderActions() {
        this.fontPickerContainer = document.createElement("ul");
        this.fontPickerContainer.classList.add("font-picker-container");
        FontPicker.FONT_OPTIONS.forEach((font) => {
            const fontLabel = document.createElement("li");
            fontLabel.classList.add("font-label");
            fontLabel.textContent = font.label;
            fontLabel.style.fontFamily = font.value;
            fontLabel.setAttribute("data-value", font.value);
            fontLabel.addEventListener("click", () => {
                this.customSurround(font.value);
                this.updateToolboxIcon();
            });
            this.fontPickerContainer.appendChild(fontLabel);
        });
        return this.fontPickerContainer;
    }
    surround(range) {
        if (!range) {
            return;
        }
        this.range = range;
    }
    customSurround(font) {
        const termWrapper = this.api.selection.findParentTag(this.tag, FontPicker.CSS);
        if (termWrapper) {
            this.unwrap(termWrapper);
        }
        else {
            this.wrap(font);
        }
        this.currentFont = font;
    }
    wrap(font) {
        const span = document.createElement(this.tag);
        span.classList.add(FontPicker.CSS);
        if (font) {
            span.style.fontFamily = font;
            this.currentFont = font;
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
    flattenSpans(node) {
        if (node instanceof DocumentFragment || node instanceof Element) {
            const spans = node.querySelectorAll("span.cdx-font-picker");
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
        const termTag = this.api.selection.findParentTag(this.tag, FontPicker.CSS);
        if (!termTag) {
            this.currentFont = "MalgunGothic";
        }
        else {
            const font = termTag.style.fontFamily.replace(/['"]+/g, "");
            this.currentFont = font;
        }
        this.updateToolboxIcon();
        return false;
    }
    updateToolboxIcon() {
        if (!this.fontPickerContainer)
            return;
        const fontLabels = this.fontPickerContainer.querySelectorAll(".font-label");
        fontLabels.forEach((label) => {
            label.classList.remove("font-active");
        });
        const activeFontLabel = Array.from(fontLabels).find((label) => label.getAttribute("data-value") === this.currentFont);
        if (activeFontLabel) {
            activeFontLabel.classList.add("font-active");
        }
    }
    get toolboxIcon() {
        return "F";
    }
    static get sanitize() {
        return {
            span: {
                class: FontPicker.CSS,
                style: true,
            },
        };
    }
}
FontPicker.FONT_OPTIONS = [
    { value: "MalgunGothic", label: "Malgun Gothic" },
    { value: "NotoSans", label: "본고딕" },
    { value: "NanumMyeongjo", label: "나눔명조" },
    { value: "NanumGothic", label: "나눔고딕" },
    { value: "NanumBarunGothic", label: "나눔바른고딕" },
    { value: "Helvetica", label: "Helvetica" },
    { value: "Georgia", label: "Georgia" },
];
FontPicker.isInline = true;
export default FontPicker;
