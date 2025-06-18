import useEditorStore from "../../../../../store/useEditorStore";
import "./index.css";
export default class Emoji {
    static get isReadOnlySupported() {
        return true;
    }
    static get contentless() {
        return true;
    }
    constructor({ data, api }) {
        this.handleKeyDown = (e) => {
            if (e.key === "Backspace") {
                e.preventDefault();
                this.api.blocks.delete();
            }
        };
        this.api = api;
        this._CSS = {
            block: this.api.styles.block,
            wrapper: "ce-emoji",
            emoji: "emoji-wrapper",
            emojiIcon: "emoji-icon",
            active: "ce-emoji--active",
        };
        const { align } = useEditorStore.getState();
        this.data = {
            ...data,
            align: align,
        };
        this._element = this.drawView();
    }
    drawView() {
        const wrapper = document.createElement("div");
        const emoji = document.createElement("div");
        const emojiIcon = document.createElement("div");
        wrapper.classList.add(this._CSS.wrapper, this._CSS.block);
        emoji.classList.add(this._CSS.emoji);
        emojiIcon.classList.add(this._CSS.emojiIcon);
        emoji.addEventListener("click", () => {
            emojiIcon.classList.add(this._CSS.active);
            document.addEventListener("keydown", this.handleKeyDown);
        });
        document.addEventListener("click", (e) => {
            if (!this._element.contains(e.target)) {
                emojiIcon.classList.remove(this._CSS.active);
                document.removeEventListener("keydown", this.handleKeyDown);
            }
        }, true);
        if (this.data) {
            emojiIcon.innerText = this.data.emoji;
            emoji.appendChild(emojiIcon);
            wrapper.appendChild(emoji);
        }
        this.applyAlignment(emoji);
        return wrapper;
    }
    applyAlignment(element) {
        element.classList.remove("align-left", "align-center");
        if (this.data.align === "center") {
            element.classList.add("align-center");
        }
        if (this.data.align === "left") {
            element.classList.add("align-left");
        }
    }
    render() {
        return this._element;
    }
    save() {
        return {
            emoji: this.data.emoji,
            align: this.data.align,
        };
    }
    static get toolbox() {
        return {
            icon: "🖼️",
            title: "emoji",
        };
    }
    static get pasteConfig() {
        return { tags: ["EMOJI"] };
    }
    onPaste() {
        this.data = {};
    }
}
