import "./index.css";
export default class Video {
    static get isReadOnlySupported() {
        return true;
    }
    static get contentless() {
        return true;
    }
    constructor({ data, api }) {
        this.handleKeyDown = (e) => {
            const isCaption = e.target instanceof HTMLInputElement;
            if (e.key === "Backspace" && !isCaption) {
                e.preventDefault();
                this.api.blocks.delete();
            }
        };
        this.api = api;
        this._CSS = {
            block: this.api.styles.block,
            wrapper: "ce-video",
            video: "video-wrapper",
            caption: "video-caption",
            active: "ce-video--active",
        };
        this.data = data || { url: "", caption: "" };
        this._element = this.drawView();
    }
    drawView() {
        const wrapper = document.createElement("div");
        const video = document.createElement("video");
        const caption = document.createElement("input");
        wrapper.classList.add(this._CSS.wrapper, this._CSS.block);
        video.classList.add(this._CSS.video);
        caption.classList.add(this._CSS.caption);
        video.addEventListener("click", (e) => {
            wrapper.classList.add(this._CSS.active);
            this.showCaption(caption);
            document.addEventListener("keydown", this.handleKeyDown);
        });
        document.addEventListener("click", (e) => {
            if (!this._element.contains(e.target)) {
                wrapper.classList.remove(this._CSS.active);
                this.hideCaption(caption);
                document.removeEventListener("keydown", this.handleKeyDown);
            }
        }, true);
        caption.addEventListener("input", (e) => {
            const input = e.target;
            this.data.caption = input.value;
        });
        if (this.data && this.data.url) {
            video.src = this.data.url;
            video.controls = true;
            caption.placeholder = "비디오를 설명해보세요";
            if (this.data.caption) {
                caption.value = this.data.caption;
                caption.style.display = "block";
            }
            else {
                caption.style.display = "none";
            }
            wrapper.appendChild(video);
            wrapper.appendChild(caption);
        }
        return wrapper;
    }
    showCaption(caption) {
        caption.style.display = "block";
    }
    hideCaption(caption) {
        if (!this.data.caption) {
            caption.style.display = "none";
        }
    }
    render() {
        return this._element;
    }
    save() {
        return this.data;
    }
    static get toolbox() {
        return {
            icon: "🖼️",
            title: "Video",
        };
    }
    static get pasteConfig() {
        return { tags: ["VIDEO"] };
    }
    onPaste() {
        this.data = {};
    }
}
