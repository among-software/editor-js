import "./index.css";
import { IconListBulleted, IconListNumbered } from "@codexteam/icons";

interface ListData {
  style: "ordered" | "unordered";
  items: string[];
}

interface ListConfig {
  defaultStyle: "ordered" | "unordered";
}

export default class List {
  static get isReadOnlySupported(): boolean {
    return true;
  }

  static get enableLineBreaks(): boolean {
    return true;
  }

  static get toolbox() {
    return {
      icon: IconListBulleted,
      title: "리스트",
    };
  }

  private api: any;
  private readOnly: boolean;
  private settings: Array<{
    name: "ordered" | "unordered";
    label: string;
    icon: string;
    default: boolean;
  }>;
  private _data: ListData;
  private _elements: {
    wrapper: HTMLElement | null;
  };

  constructor({
    data,
    config,
    api,
    readOnly,
  }: {
    data: ListData;
    config: ListConfig;
    api: any;
    readOnly: boolean;
  }) {
    this.api = api;
    this.readOnly = readOnly;

    this.settings = [
      {
        name: "unordered",
        label: "글머리 기호 목록",
        icon: IconListBulleted,
        default: config.defaultStyle === "unordered" || false,
      },
      {
        name: "ordered",
        label: "번호 목록",
        icon: IconListNumbered,
        default: config.defaultStyle === "ordered" || true,
      },
    ];

    this._elements = {
      wrapper: null,
    };

    this._data = {
      style: this.settings.find((tune) => tune.default === true)!.name,
      items: [],
    };

    this.data = data;
  }

  render(): HTMLElement {
    this._elements.wrapper = this.makeMainTag(this._data.style);

    if (this._data.items.length) {
      this._data.items.forEach((item) => {
        const li = this._make("li", this.CSS.item);
        li.textContent = item;
        this._elements.wrapper!.appendChild(li);
      });
    } else {
      this._elements.wrapper!.appendChild(this._make("li", this.CSS.item));
    }

    if (!this.readOnly) {
      this._elements.wrapper.addEventListener(
        "keydown",
        (event: KeyboardEvent) => {
          const [ENTER, BACKSPACE] = [13, 8];
          switch (event.keyCode) {
            case ENTER:
              this.getOutofList(event);
              break;
            case BACKSPACE:
              this.backspace(event);
              break;
          }
        },
        false
      );
    }

    return this._elements.wrapper!;
  }

  save(): ListData {
    return this.data;
  }

  static get conversionConfig() {
    return {
      export: (data: ListData): string => {
        return data.items.join(". ");
      },
      import: (string: string): ListData => {
        return {
          items: [string],
          style: "unordered",
        };
      },
    };
  }

  static get sanitize() {
    return {
      style: {},
      items: true,
    };
  }

  renderSettings() {
    return this.settings.map((item) => ({
      ...item,
      isActive: this._data.style === item.name,
      closeOnActivate: true,
      onActivate: () => this.toggleTune(item.name),
    }));
  }

  onPaste(event: Event) {
    const list = (event as CustomEvent).detail.data;
    this.data = this.pasteHandler(list);
  }

  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"],
    };
  }

  makeMainTag(style: "ordered" | "unordered"): HTMLElement {
    const styleClass =
      style === "ordered" ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered;
    const tag = style === "ordered" ? "ol" : "ul";

    return this._make(tag, [this.CSS.baseBlock, this.CSS.wrapper, styleClass], {
      contentEditable: !this.readOnly,
    });
  }

  toggleTune(style: "ordered" | "unordered") {
    const newTag = this.makeMainTag(style);

    while (this._elements.wrapper?.hasChildNodes()) {
      newTag.appendChild(this._elements.wrapper.firstChild!);
    }

    if (this._elements.wrapper) {
      this._elements.wrapper.replaceWith(newTag);
      this._elements.wrapper = newTag;
      this._data.style = style;
    }
  }

  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: "cdx-list",
      wrapperOrdered: "cdx-list--ordered",
      wrapperUnordered: "cdx-list--unordered",
      item: "cdx-list__item",
    };
  }

  set data(listData: ListData) {
    if (!listData) {
      listData = { style: "unordered", items: [] };
    }

    this._data.style =
      listData.style ||
      this.settings.find((tune) => tune.default === true)!.name;
    this._data.items = listData.items || [];

    const oldView = this._elements.wrapper;

    if (oldView) {
      oldView.parentNode!.replaceChild(this.render(), oldView);
    }
  }

  get data(): ListData {
    this._data.items = [];

    const items = this._elements.wrapper?.querySelectorAll(`.${this.CSS.item}`);

    if (items) {
      items.forEach((item) => {
        const value = item.textContent?.trim();
        if (value) {
          this._data.items.push(value);
        }
      });
    }

    return this._data;
  }

  _make(
    tagName: string,
    classNames: string | string[] | null = null,
    attributes: { [key: string]: any } = {}
  ): HTMLElement {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el.setAttribute(attrName, attributes[attrName]);
    }

    return el;
  }

  get currentItem(): HTMLElement {
    let currentNode = window.getSelection()!.anchorNode;

    if (currentNode!.nodeType !== Node.ELEMENT_NODE) {
      currentNode = currentNode!.parentNode;
    }

    return (currentNode as Element).closest(`.${this.CSS.item}`) as HTMLElement;
  }

  getOutofList(event: KeyboardEvent) {
    const items = this._elements.wrapper!.querySelectorAll("." + this.CSS.item);

    if (items.length === 1) {
      const currentItem = this.currentItem;

      if (!currentItem || !currentItem.textContent?.trim().length) {
        event.preventDefault();
        event.stopPropagation();

        this.api.blocks.delete(this.api.blocks.getCurrentBlockIndex());
        this.api.blocks.insert("paragraph", { text: "" });
        this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());

        return;
      }
    }

    if (items.length > 1) {
      const lastItem = items[items.length - 1];
      const currentItem = this.currentItem;

      if (currentItem === lastItem && !lastItem.textContent?.trim().length) {
        currentItem.parentElement!.removeChild(currentItem);
        this.api.blocks.insert();
        this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }

  backspace(event: KeyboardEvent) {
    const items = this._elements.wrapper!.querySelectorAll("." + this.CSS.item);

    if (items.length === 0) {
      return;
    }

    const currentItem = this.currentItem;

    if (!currentItem) {
      return;
    }

    if (!currentItem.textContent?.trim().length) {
      const target = currentItem;

      if (items.length === 1) {
        event.preventDefault();

        this.api.blocks.delete(this.api.blocks.getCurrentBlockIndex());
        this.api.blocks.insert("paragraph", { text: "" });
        this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());

        return;
      }

      window.requestIdleCallback(() => {
        target.parentElement!.removeChild(target);
      });
    }
  }

  pasteHandler(element: HTMLElement): ListData {
    const { tagName: tag } = element;
    let style: "ordered" | "unordered";

    switch (tag) {
      case "OL":
        style = "ordered";
        break;
      case "UL":
      case "LI":
        style = "unordered";
        break;
      default:
        style = "unordered";
    }

    const data: ListData = {
      style,
      items: [],
    };

    if (tag === "LI") {
      data.items = [element.textContent || ""];
    } else {
      const items = Array.from(element.querySelectorAll("LI"));
      data.items = items
        .map((li) => li.textContent || "")
        .filter((item) => !!item.trim());
    }

    return data;
  }
}
