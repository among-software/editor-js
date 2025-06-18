import { HTMLAttributes } from "react";
interface EditableDivProps extends HTMLAttributes<HTMLDivElement> {
    placeholder?: string;
    $fontFamily?: string;
    $fontSize: number;
    $fontWeight?: number;
    $lineHeight?: number;
    $placeholderColor?: string;
    $fontColor?: string;
    $cursorColor?: string;
    $textAlign?: string;
}
export declare const EditableDiv: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, EditableDivProps>> & string;
export {};
