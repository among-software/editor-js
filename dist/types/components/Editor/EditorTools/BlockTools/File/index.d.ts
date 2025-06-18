import "./index.css";
import { BlockTool, BlockToolConstructorOptions, BlockToolData, ToolboxConfig, PasteConfig } from "@editorjs/editorjs";
export default class File implements BlockTool {
    tunes: {
        align: "left" | "center" | "right" | "justify";
    };
    static get isReadOnlySupported(): boolean;
    static get contentless(): boolean;
    private api;
    private _CSS;
    private data;
    private _element;
    constructor({ data, api }: BlockToolConstructorOptions);
    drawView(): HTMLDivElement;
    private handleKeyDown;
    applyAlignment(element: HTMLDivElement): void;
    render(): HTMLDivElement;
    save(): BlockToolData;
    static get toolbox(): ToolboxConfig;
    static get pasteConfig(): PasteConfig;
    onPaste(): void;
}
