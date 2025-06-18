interface ContentEditableProps {
    initialText?: string;
    placeholder?: string;
    maxLength?: number;
    exceedMessage?: string;
    fontSize?: number;
    fontWeight?: number;
    fontFamily?: string;
    fontColor?: string;
    lineHeight?: number;
    placeholderColor?: string;
    cursorColor?: string;
    textAlign?: string;
    onChange?: (text: string) => void;
}
/**
 * 커스텀 ContentEditable 컴포넌트
 * div를 기반으로 한 편집 가능한 텍스트 영역을 제공
 * 최대 길이 제한, 스타일링, 커서 위치 보존 등의 기능 포함
 */
export default function ContentEditable({ initialText, placeholder, maxLength, exceedMessage, fontSize, fontWeight, fontFamily, lineHeight, onChange, fontColor, placeholderColor, cursorColor, textAlign, }: ContentEditableProps): import("react/jsx-runtime").JSX.Element;
export {};
