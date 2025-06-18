import "./index.css";
import { type InlineTool, type SanitizerConfig } from "@editorjs/editorjs";
import { type InlineToolConstructorOptions } from "@editorjs/editorjs/types/tools/inline-tool";
export default class FontPicker implements InlineTool {
    static get CSS(): string;
    static range: Range;
    private button;
    private tag;
    private api;
    private iconClasses;
    private range;
    private currentFont;
    private fontPickerContainer;
    private static FONT_OPTIONS;
    constructor(options: InlineToolConstructorOptions);
    static isInline: boolean;
    render(): HTMLElement;
    renderActions(): HTMLElement;
    surround(range: Range): void;
    private customSurround;
    wrap(font?: string): void;
    private flattenSpans;
    unwrap(termWrapper: HTMLElement): void;
    checkState(): boolean;
    private updateToolboxIcon;
    get toolboxIcon(): string;
    static get sanitize(): SanitizerConfig;
}
