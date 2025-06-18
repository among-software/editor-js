import useEditorStore from "../../../../../store/useEditorStore";
import "./index.css";
export default class Delimiter {
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
            wrapper: "ce-delimiter",
            delimiter: "delimiter",
            active: "ce-delimiter--active",
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
        const delimiter = document.createElement("hr");
        wrapper.classList.add(this._CSS.wrapper, this._CSS.block);
        delimiter.classList.add(this._CSS.delimiter);
        delimiter.addEventListener("click", () => {
            delimiter.classList.add(this._CSS.active);
            document.addEventListener("keydown", this.handleKeyDown);
        });
        document.addEventListener("click", (e) => {
            if (!this._element.contains(e.target)) {
                delimiter.classList.remove(this._CSS.active);
                document.removeEventListener("keydown", this.handleKeyDown);
            }
        }, true);
        if (this.data) {
            delimiter.style.backgroundImage = `url(${this.data.url})`;
            delimiter.style.backgroundPosition =
                this.data.align === "center" ? "50% 50%" : this.data.imagePosition;
            wrapper.appendChild(delimiter);
        }
        this.applyAlignment(delimiter);
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
            url: this.data.url,
            imagePosition: this.data.imagePosition,
            align: this.data.align,
        };
    }
    static get toolbox() {
        return {
            icon: "🖼️",
            title: "delimiter",
        };
    }
    static get pasteConfig() {
        return { tags: ["HR"] };
    }
    onPaste() {
        this.data = {};
    }
}
