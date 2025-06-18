export type FontType = "NotoSans" | "NanumMyeongjo" | "NanumGothic" | "NanumBarunGothic" | "Helvetica" | "Georgia";
export interface FontOption {
    value: FontType;
    label: string;
}
export declare const FONT_OPTIONS: FontOption[];
