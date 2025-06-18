import "./index.css";
import { type InlineTool, type SanitizerConfig } from "@editorjs/editorjs";
import { type InlineToolConstructorOptions } from "@editorjs/editorjs/types/tools/inline-tool";
export default class ColorPicker implements InlineTool {
    static get CSS(): string;
    static range: Range;
    private button;
    private colorPreview;
    private tag;
    private api;
    private iconClasses;
    private colors;
    private range;
    private currentColor;
    constructor(options: InlineToolConstructorOptions);
    static isInline: boolean;
    render(): HTMLElement;
    renderActions(): HTMLElement;
    surround(range: Range): void;
    private customSurround;
    wrap(color?: string): void;
    private flattenSpans;
    unwrap(termWrapper: HTMLElement): void;
    checkState(): boolean;
    private updateToolboxIcon;
    get toolboxIcon(): string;
    static get sanitize(): SanitizerConfig;
}
