import { FontType } from "../../../../types/common/font.types";
interface FontFamilyTooltipProps {
    selectedFont: FontType;
    onFontSelect: (font: FontType) => void;
    isOpen: boolean;
    onToggle: () => void;
}
/**
 * 폰트 패밀리를 선택할 수 있는 드롭다운 툴팁 컴포넌트
 * 한글/영문 폰트 옵션을 제공하고 선택된 폰트를 표시
 */
export default function FontFamilyTooltip({ selectedFont, onFontSelect, isOpen, onToggle, }: FontFamilyTooltipProps): import("react/jsx-runtime").JSX.Element;
export {};
