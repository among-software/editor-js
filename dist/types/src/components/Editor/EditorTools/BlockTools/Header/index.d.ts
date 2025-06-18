/**
 * Build styles
 */
import "./index.css";
import { API, BlockTune, PasteEvent } from "@editorjs/editorjs";
export interface HeaderData {
    text: string;
    level: number;
}
export interface HeaderConfig {
    placeholder?: string;
    levels?: number[];
    defaultLevel?: number;
}
interface Level {
    number: number;
    tag: string;
    svg: string;
}
interface ConstructorArgs {
    data: HeaderData | {};
    config?: HeaderConfig;
    api: API;
    readOnly: boolean;
}
export default class Header {
    private api;
    private readOnly;
    private _settings;
    private _data;
    private _element;
    constructor({ data, config, api, readOnly }: ConstructorArgs);
    private get _CSS();
    isHeaderData(data: any): data is HeaderData;
    normalizeData(data: HeaderData | {}): HeaderData;
    render(): HTMLHeadingElement;
    renderSettings(): BlockTune[];
    setLevel(level: number): void;
    merge(data: HeaderData): void;
    validate(blockData: HeaderData): boolean;
    save(toolsContent: HTMLHeadingElement): HeaderData;
    static get conversionConfig(): {
        export: string;
        import: string;
    };
    static get sanitize(): {
        level: boolean;
        text: {};
    };
    static get isReadOnlySupported(): boolean;
    get data(): HeaderData;
    set data(data: HeaderData);
    getTag(): HTMLHeadingElement;
    get currentLevel(): Level;
    get defaultLevel(): Level;
    get levels(): Level[];
    onPaste(event: PasteEvent): void;
    static get pasteConfig(): {
        tags: string[];
    };
    static get toolbox(): {
        icon: string;
        title: string;
    };
}
export {};
