import useEditorStore from "../../../../../store/useEditorStore";
import "./index.css";
export default class Place {
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
            wrapper: "ce-place",
            place: "place-wrapper",
            placeContainer: "place-container",
            placeIcon: "place-icon",
            placeTextWrapper: "place-text-wrapper",
            placeName: "place-name",
            placeAddress: "place-address",
            active: "ce-place--active",
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
        const place = document.createElement("div");
        const placeContainer = document.createElement("div");
        const placeIcon = document.createElement("div");
        const placeTextWrapper = document.createElement("div");
        const placeName = document.createElement("p");
        const placeAddress = document.createElement("p");
        wrapper.classList.add(this._CSS.wrapper, this._CSS.block);
        place.classList.add(this._CSS.place);
        placeContainer.classList.add(this._CSS.placeContainer);
        placeIcon.classList.add(this._CSS.placeIcon);
        placeTextWrapper.classList.add(this._CSS.placeTextWrapper);
        placeName.classList.add(this._CSS.placeName);
        placeAddress.classList.add(this._CSS.placeAddress);
        place.addEventListener("click", () => {
            placeContainer.classList.add(this._CSS.active);
            document.addEventListener("keydown", this.handleKeyDown);
        });
        document.addEventListener("click", (e) => {
            if (!this._element.contains(e.target)) {
                placeContainer.classList.remove(this._CSS.active);
                document.removeEventListener("keydown", this.handleKeyDown);
            }
        }, true);
        if (this.data) {
            placeName.innerText = this.data.name;
            placeAddress.innerText = this.data.address;
            placeTextWrapper.appendChild(placeName);
            placeTextWrapper.appendChild(placeAddress);
            placeContainer.appendChild(placeIcon);
            placeContainer.appendChild(placeTextWrapper);
            place.appendChild(placeContainer);
            wrapper.appendChild(place);
        }
        this.applyAlignment(place);
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
            id: this.data.id,
            address: this.data.address,
            name: this.data.name,
            align: this.data.align,
        };
    }
    static get toolbox() {
        return {
            icon: "🖼️",
            title: "place",
        };
    }
    static get pasteConfig() {
        return { tags: ["DIV"] };
    }
    onPaste() {
        this.data = {};
    }
}
