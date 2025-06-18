import "./index.css";
import { type InlineTool, type SanitizerConfig } from "@editorjs/editorjs";
import { type InlineToolConstructorOptions } from "@editorjs/editorjs/types/tools/inline-tool";
export default class Underline implements InlineTool {
    static get CSS(): string;
    private button;
    private tag;
    private api;
    private iconClasses;
    constructor(options: InlineToolConstructorOptions);
    static isInline: boolean;
    render(): HTMLElement;
    surround(range: Range): void;
    wrap(range: Range): void;
    unwrap(termWrapper: HTMLElement): void;
    checkState(): boolean;
    get toolboxIcon(): string;
    static get sanitize(): SanitizerConfig;
}
