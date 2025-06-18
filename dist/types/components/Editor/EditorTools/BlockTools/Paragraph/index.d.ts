/**
 * Build styles
 */
import "./index.css";
import type { API, ConversionConfig, HTMLPasteEvent, PasteConfig, SanitizerConfig, ToolConfig, ToolboxConfig } from "@editorjs/editorjs";
export interface ParagraphConfig extends ToolConfig {
    placeholder?: string;
    preserveBlank?: boolean;
}
export interface ParagraphData {
    text: string;
    align: "left" | "center" | "right" | "justify";
}
interface ParagraphParams {
    data: ParagraphData;
    config?: ParagraphConfig;
    api: API;
    readOnly: boolean;
}
export default class Paragraph {
    static get DEFAULT_PLACEHOLDER(): string;
    api: API;
    readOnly: boolean;
    private _CSS;
    private _placeholder;
    private _data;
    private _element;
    private _preserveBlank;
    constructor({ data, config, api, readOnly }: ParagraphParams);
    onKeyUp(e: KeyboardEvent): void;
    drawView(): HTMLDivElement;
    applyAlignment(element: HTMLDivElement): void;
    render(): HTMLDivElement;
    merge(data: ParagraphData): void;
    validate(savedData: ParagraphData): boolean;
    save(toolsContent: HTMLDivElement): ParagraphData;
    onPaste(event: HTMLPasteEvent): void;
    static get conversionConfig(): ConversionConfig;
    static get sanitize(): SanitizerConfig;
    static get isReadOnlySupported(): boolean;
    static get pasteConfig(): PasteConfig;
    static get toolbox(): ToolboxConfig;
}
export {};
