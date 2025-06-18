import "./index.css";
import { IconStrikethrough } from "@codexteam/icons";
class Strikethrough {
    static get CSS() {
        return "cdx-strike-through";
    }
    constructor(options) {
        this.tag = "S";
        this.api = options.api;
        this.iconClasses = {
            base: this.api.styles.inlineToolButton,
            active: this.api.styles.inlineToolButtonActive,
        };
    }
    render() {
        this.button = document.createElement("button");
        this.button.type = "button";
        this.button.classList.add(this.iconClasses.base);
        this.button.innerHTML = this.toolboxIcon;
        return this.button;
    }
    surround(range) {
        if (!range) {
            return;
        }
        const termWrapper = this.api.selection.findParentTag(this.tag, Strikethrough.CSS);
        if (termWrapper) {
            this.unwrap(termWrapper);
        }
        else {
            this.wrap(range);
        }
    }
    wrap(range) {
        const s = document.createElement(this.tag);
        s.classList.add(Strikethrough.CSS);
        s.appendChild(range.extractContents());
        range.insertNode(s);
        this.api.selection.expandToTag(s);
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
        if (!unwrappedContent) {
            return;
        }
        termWrapper.parentNode?.removeChild(termWrapper);
        range.insertNode(unwrappedContent);
        sel.removeAllRanges();
        sel.addRange(range);
    }
    checkState() {
        const termTag = this.api.selection.findParentTag(this.tag, Strikethrough.CSS);
        this.button?.classList.toggle(this.iconClasses.active, !!termTag);
        return !!termTag;
    }
    get toolboxIcon() {
        return IconStrikethrough;
    }
    static get sanitize() {
        return {
            u: {
                class: Strikethrough.CSS,
            },
        };
    }
}
Strikethrough.isInline = true;
export default Strikethrough;
