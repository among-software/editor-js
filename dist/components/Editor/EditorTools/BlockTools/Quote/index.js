import "./index.css";
import { IconQuote } from "@codexteam/icons";
import { make } from "@editorjs/dom";
var QuoteType;
(function (QuoteType) {
    QuoteType["Type1"] = "type1";
    QuoteType["Type2"] = "type2";
    QuoteType["Type3"] = "type3";
})(QuoteType || (QuoteType = {}));
export default class Quote {
    constructor({ data, config, api, readOnly, block }) {
        const { DEFAULT_TYPE } = Quote;
        this.api = api;
        this.readOnly = readOnly;
        this._data = {
            text: data.text || "",
            type: (Object.values(QuoteType).includes(data.type) &&
                data.type) ||
                config.defaultType ||
                DEFAULT_TYPE,
        };
        this._CSS = {
            baseClass: this.api.styles.block,
            wrapper: "cdx-quote",
            text: "cdx-quote__text",
            input: this.api.styles.input,
        };
        this._block = block;
    }
    static get isReadOnlySupported() {
        return true;
    }
    static get toolbox() {
        return {
            icon: IconQuote,
            title: "인용구",
        };
    }
    static get contentless() {
        return true;
    }
    static get enableLineBreaks() {
        return true;
    }
    static get DEFAULT_TYPE() {
        return QuoteType.Type1;
    }
    static get conversionConfig() {
        return {
            import: "text",
            export: function (quoteData) {
                return quoteData.text;
            },
        };
    }
    get CSS() {
        return {
            baseClass: this.api.styles.block,
            wrapper: "cdx-quote",
            text: "cdx-quote__text",
            input: this.api.styles.input,
        };
    }
    get settings() {
        return [
            {
                name: QuoteType.Type1,
                label: "인용구1",
            },
            {
                name: QuoteType.Type2,
                label: "인용구2",
            },
            {
                name: QuoteType.Type3,
                label: "인용구3",
            },
        ];
    }
    render() {
        const container = make("div", [this._CSS.baseClass, this._CSS.wrapper]);
        this._quoteElement = make("blockquote", [this._CSS.input, this._CSS.text, this.getTypeClass(this._data.type)], {
            contentEditable: !this.readOnly,
            innerHTML: this._data.text,
        });
        this._quoteElement.addEventListener("keydown", (event) => this.handleKeydown(event));
        container.appendChild(this._quoteElement);
        return container;
    }
    get currentItem() {
        let currentNode = window.getSelection().anchorNode;
        if (currentNode.nodeType !== Node.ELEMENT_NODE) {
            currentNode = currentNode.parentNode;
        }
        return currentNode.closest(`.${this.CSS.text}`);
    }
    handleKeydown(event) {
        const currentItem = this._quoteElement;
        if (event.key === "Enter") {
            if (!event.shiftKey) {
                event.preventDefault();
                this.getOutOfQuote();
            }
        }
        if (event.key === "Backspace" &&
            currentItem.textContent?.trim().length === 0) {
            event.preventDefault();
            const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();
            this.api.blocks.delete(currentBlockIndex);
            this.api.blocks.insert("paragraph", { text: "" });
            this.api.caret.setToBlock(currentBlockIndex);
            return;
        }
    }
    getOutOfQuote() {
        this.api.blocks.insert();
        this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
    }
    getTypeClass(type) {
        switch (type) {
            case QuoteType.Type1:
                return "blockquote_type1";
            case QuoteType.Type2:
                return "blockquote_type2";
            case QuoteType.Type3:
                return "blockquote_type3";
            default:
                return "blockquote_type1";
        }
    }
    save(quoteElement) {
        const text = quoteElement.querySelector(`.${this._CSS.text}`);
        return Object.assign(this._data, {
            text: text?.innerHTML ?? "",
        });
    }
    static get sanitize() {
        return {
            text: {
                br: true,
            },
        };
    }
    renderSettings() {
        return this.settings.map((item) => ({
            icon: undefined, // 아이콘이 필요 없으므로 null로 설정
            label: this.api.i18n.t(item.label),
            onActivate: () => this._toggleTune(item.name),
            isActive: this._data.type === item.name,
            closeOnActivate: true,
        }));
    }
    _toggleTune(tune) {
        this._data.type = tune;
        // 타입 변경에 따라 클래스 업데이트
        if (this._quoteElement) {
            // 기존 타입 클래스 제거
            this._quoteElement.classList.remove("blockquote_type1", "blockquote_type2", "blockquote_type3");
            // 새 타입 클래스 추가
            this._quoteElement.classList.add(this.getTypeClass(tune));
        }
        // 업데이트된 스타일을 반영하기 위해 블록을 갱신
        this._block.dispatchChange();
    }
}
