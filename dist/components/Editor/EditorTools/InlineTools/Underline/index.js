import "./index.css";
import { IconUnderline } from "@codexteam/icons";
class Underline {
    static get CSS() {
        return "cdx-underline";
    }
    constructor(options) {
        this.tag = "U";
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
        const termWrapper = this.api.selection.findParentTag(this.tag, Underline.CSS);
        if (termWrapper) {
            this.unwrap(termWrapper);
        }
        else {
            this.wrap(range);
        }
    }
    wrap(range) {
        const u = document.createElement(this.tag);
        u.classList.add(Underline.CSS);
        u.appendChild(range.extractContents());
        range.insertNode(u);
        this.api.selection.expandToTag(u);
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
        const termTag = this.api.selection.findParentTag(this.tag, Underline.CSS);
        this.button?.classList.toggle(this.iconClasses.active, !!termTag);
        return !!termTag;
    }
    get toolboxIcon() {
        return IconUnderline;
    }
    static get sanitize() {
        return {
            u: {
                class: Underline.CSS,
            },
        };
    }
}
Underline.isInline = true;
export default Underline;
