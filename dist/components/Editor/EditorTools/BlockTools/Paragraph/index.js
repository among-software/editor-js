/**
 * Build styles
 */
import "./index.css";
import { IconText } from "@codexteam/icons";
import makeFragment from "./utils/makeFragment";
import useEditorStore from "../../../../../store/useEditorStore";
export default class Paragraph {
    static get DEFAULT_PLACEHOLDER() {
        return "";
    }
    constructor({ data, config = {}, api, readOnly }) {
        this.api = api;
        this.readOnly = readOnly;
        this._CSS = {
            block: this.api.styles.block,
            wrapper: "ce-paragraph",
        };
        if (!this.readOnly) {
            this.onKeyUp = this.onKeyUp.bind(this);
        }
        this._placeholder = config.placeholder
            ? config.placeholder
            : Paragraph.DEFAULT_PLACEHOLDER;
        const { align } = useEditorStore.getState();
        this._data = {
            ...data,
            align: align,
        };
        this._element = null;
        this._preserveBlank = config.preserveBlank ?? false;
    }
    onKeyUp(e) {
        if (e.code !== "Backspace" && e.code !== "Delete") {
            return;
        }
        if (!this._element) {
            return;
        }
        const { textContent } = this._element;
        if (textContent === "") {
            this._element.innerHTML = "";
        }
    }
    drawView() {
        const div = document.createElement("DIV");
        div.classList.add(this._CSS.wrapper, this._CSS.block);
        div.contentEditable = "false";
        div.dataset.placeholderActive = this.api.i18n.t(this._placeholder);
        if (this._data.text) {
            div.innerHTML = this._data.text;
        }
        if (!this.readOnly) {
            div.contentEditable = "true";
            div.addEventListener("keyup", this.onKeyUp);
        }
        this.applyAlignment(div);
        return div;
    }
    applyAlignment(element) {
        element.classList.remove("text-align-left", "text-align-center");
        if (this._data.align === "center") {
            element.classList.add("text-align-center");
        }
        if (this._data.align === "left") {
            element.classList.add("text-align-left");
        }
    }
    render() {
        this._element = this.drawView();
        return this._element;
    }
    merge(data) {
        if (!this._element) {
            return;
        }
        this._data.text += data.text;
        const fragment = makeFragment(data.text);
        this._element.appendChild(fragment);
        this._element.normalize();
    }
    validate(savedData) {
        if (savedData.text.trim() === "" && !this._preserveBlank) {
            return false;
        }
        return true;
    }
    save(toolsContent) {
        return {
            text: toolsContent.innerHTML,
            align: this._data.align,
        };
    }
    onPaste(event) {
        const data = {
            text: event.detail.data.innerHTML,
            align: this._data.align,
        };
        this._data = data;
        window.requestAnimationFrame(() => {
            if (!this._element) {
                return;
            }
            this._element.innerHTML = this._data.text || "";
        });
    }
    static get conversionConfig() {
        return {
            export: "text",
            import: "text",
        };
    }
    static get sanitize() {
        return {
            text: {
                br: true,
            },
        };
    }
    static get isReadOnlySupported() {
        return true;
    }
    static get pasteConfig() {
        return {
            tags: ["P"],
        };
    }
    static get toolbox() {
        return {
            icon: IconText,
            title: "본문",
        };
    }
}
