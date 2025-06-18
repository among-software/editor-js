import "./index.css";
interface ListData {
    style: "ordered" | "unordered";
    items: string[];
}
interface ListConfig {
    defaultStyle: "ordered" | "unordered";
}
export default class List {
    static get isReadOnlySupported(): boolean;
    static get enableLineBreaks(): boolean;
    static get toolbox(): {
        icon: string;
        title: string;
    };
    private api;
    private readOnly;
    private settings;
    private _data;
    private _elements;
    constructor({ data, config, api, readOnly, }: {
        data: ListData;
        config: ListConfig;
        api: any;
        readOnly: boolean;
    });
    render(): HTMLElement;
    save(): ListData;
    static get conversionConfig(): {
        export: (data: ListData) => string;
        import: (string: string) => ListData;
    };
    static get sanitize(): {
        style: {};
        items: {
            br: boolean;
        };
    };
    renderSettings(): {
        isActive: boolean;
        closeOnActivate: boolean;
        onActivate: () => void;
        name: "ordered" | "unordered";
        label: string;
        icon: string;
        default: boolean;
    }[];
    onPaste(event: Event): void;
    static get pasteConfig(): {
        tags: string[];
    };
    makeMainTag(style: "ordered" | "unordered"): HTMLElement;
    toggleTune(style: "ordered" | "unordered"): void;
    get CSS(): {
        baseBlock: any;
        wrapper: string;
        wrapperOrdered: string;
        wrapperUnordered: string;
        item: string;
    };
    set data(listData: ListData);
    get data(): ListData;
    _make(tagName: string, classNames?: string | string[] | null, attributes?: {
        [key: string]: any;
    }): HTMLElement;
    get currentItem(): HTMLElement;
    getOutofList(event: KeyboardEvent): void;
    backspace(event: KeyboardEvent): void;
    pasteHandler(element: HTMLElement): ListData;
}
export {};
