import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import * as S from "./FontColorTooltip.style";
import { TITLE_TEXT_COLORS } from "../../../../styles/Theme";
import useTitleStore from "../../../../store/useTitleStore";
/**
 * 폰트 색상을 선택할 수 있는 툴팁 컴포넌트
 * 현재 선택된 색상을 아이콘으로 표시하고, 클릭 시 색상 선택 팔레트를 제공
 */
export default function FontColorTooltip({ isOpen, onToggle, }) {
    const [selectedColor, setSelectedColor] = useState(TITLE_TEXT_COLORS["black"]);
    const setTitleColor = useTitleStore((state) => state.setTitleColor);
    const handleFontColor = (color) => {
        setSelectedColor(color);
        setTitleColor(color);
        onToggle();
    };
    return (_jsxs(S.FontColorTooltipWrapper, { onClick: onToggle, children: [_jsx(S.ColorIcon, { "$isDropdownOpen": isOpen, "$fontColor": selectedColor }), isOpen && (_jsx(S.TitleColorList, { children: Object.entries(TITLE_TEXT_COLORS).map(([key, color]) => (_jsx(S.TitleColorItem, { "$colorItemColor": color, "$isSelected": color === selectedColor, onClick: () => handleFontColor(color) }, key))) }))] }));
}
