import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import * as S from "./FontFamilyTooltip.style";
import { FONT_OPTIONS } from "../../../../types/common/font.types";
/**
 * 폰트 패밀리를 선택할 수 있는 드롭다운 툴팁 컴포넌트
 * 한글/영문 폰트 옵션을 제공하고 선택된 폰트를 표시
 */
export default function FontFamilyTooltip({ selectedFont, onFontSelect, isOpen, onToggle, }) {
    const [activeFont, setActiveFont] = useState(FONT_OPTIONS.find((option) => option.value === selectedFont)?.label);
    const handleFontSelect = (font) => {
        onFontSelect(font);
        setActiveFont(FONT_OPTIONS.find((option) => option.value === font)?.label ||
            FONT_OPTIONS[0].label);
        onToggle();
    };
    return (_jsxs(S.DropdownWrapper, { children: [_jsxs(S.DropdownHeader, { onClick: onToggle, "$isDropdownOpen": isOpen, children: [activeFont, _jsx(S.DropdownIcon, { "$isDropdownOpen": isOpen })] }), isOpen && (_jsx(S.DropdownList, { children: FONT_OPTIONS.map((font) => (_jsx(S.DropdownItem, { onClick: () => handleFontSelect(font.value), fontFamily: font.value, "$isSelected": font.label === activeFont, children: font.label }, font.value))) }))] }));
}
