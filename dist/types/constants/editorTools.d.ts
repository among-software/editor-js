import { Delimiter, Emoji, File, Header, List, CustomParagraph, Place, Quote, UnifiedImage, Video } from "../components/Editor/EditorTools/BlockTools/index";
import FontSizePicker from "../components/Editor/EditorTools/InlineTools/FontSizePicker";
import { FontPicker, Strikethrough, TextColor, Underline } from "../components/Editor/EditorTools/InlineTools/index";
/**
 * Editor.js에서 사용되는 도구들의 설정 객체
 * Block Tools: 문단, 헤더, 인용구 등의 블록 레벨 도구들
 * Inline Tools: 폰트, 밑줄, 색상 등의 인라인 스타일 도구들
 */
export declare const EDITOR_JS_TOOLS: {
    paragraph: {
        class: typeof CustomParagraph;
        inlineToolbar: string[];
    };
    header: {
        class: typeof Header;
        inlineToolbar: any[];
        config: {
            levels: number[];
            defaultLevel: number;
        };
    };
    quote: {
        class: typeof Quote;
        inlineToolbar: any[];
    };
    list: {
        class: typeof List;
        inlineToolbar: any[];
    };
    unifiedImage: typeof UnifiedImage;
    video: typeof Video;
    file: typeof File;
    place: typeof Place;
    emoji: typeof Emoji;
    delimiter: typeof Delimiter;
    font: typeof FontPicker;
    underline: typeof Underline;
    fontSize: typeof FontSizePicker;
    strikethrough: typeof Strikethrough;
    color: {
        class: typeof TextColor;
        config: {
            colorCollections: string[];
        };
    };
};
