export default class FontSizePicker {
    static isInline: boolean;
    static title: string;
    static sanitize: {
        span: (el: HTMLElement) => {
            style: string;
        };
    };
    private data;
    private select;
    constructor({ data }: {
        data: {
            size: string;
        };
    });
    render(): HTMLSelectElement;
    surround(range: Range): void;
    checkState(selection: Selection): void;
    renderActions(): any;
    save(): {
        size: string;
    };
}
