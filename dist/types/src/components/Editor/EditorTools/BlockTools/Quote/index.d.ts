import "./index.css";
import type { API, BlockAPI, BlockTool, ToolConfig } from "@editorjs/editorjs";
import { MenuConfig } from "@editorjs/editorjs/types/tools";
export interface QuoteConfig extends ToolConfig {
    defaultType: QuoteType;
}
export interface QuoteData {
    text: string;
    type: QuoteType;
}
interface QuoteParams {
    data: QuoteData;
    config: QuoteConfig;
    api: API;
    readOnly: boolean;
    block: BlockAPI;
}
interface QuoteCSS {
    baseClass: string;
    wrapper: string;
    input: string;
    text: string;
}
declare enum QuoteType {
    Type1 = "type1",
    Type2 = "type2",
    Type3 = "type3"
}
export default class Quote implements BlockTool {
    api: API;
    readOnly: boolean;
    private _block;
    private _data;
    private _CSS;
    private _quoteElement;
    constructor({ data, config, api, readOnly, block }: QuoteParams);
    static get isReadOnlySupported(): boolean;
    static get toolbox(): {
        icon: string;
        title: string;
    };
    static get contentless(): boolean;
    static get enableLineBreaks(): boolean;
    static get DEFAULT_TYPE(): QuoteType;
    static get conversionConfig(): {
        import: string;
        export: (quoteData: QuoteData) => string;
    };
    get CSS(): QuoteCSS;
    get settings(): {
        name: QuoteType;
        label: string;
    }[];
    render(): HTMLElement;
    get currentItem(): HTMLElement;
    handleKeydown(event: KeyboardEvent): void;
    getOutOfQuote(): void;
    getTypeClass(type: QuoteType): string;
    save(quoteElement: HTMLDivElement): QuoteData;
    static get sanitize(): {
        text: {
            br: boolean;
        };
    };
    renderSettings(): HTMLElement | MenuConfig;
    _toggleTune(tune: QuoteType): void;
}
export {};
