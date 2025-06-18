import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from "./TitleCoverColorSwiper.style";
import useTitleStore from "../../../../../store/useTitleStore";
import { TITLE_COVER_COLORS } from "../../../../../styles/Theme";
/**
 * 제목 섹션의 배경 색상을 선택할 수 있는 스와이퍼 컴포넌트
 * 색상 원형 버튼들을 나열하고 좌우 버튼으로 색상 변경 가능
 */
const TitleCoverColorSwiper = () => {
    const currentColor = useTitleStore((state) => state.titleCoverColor);
    const setTitleCoverColor = useTitleStore((state) => state.setTitleCoverColor);
    const colorKeys = Object.keys(TITLE_COVER_COLORS);
    const currentIndex = colorKeys.indexOf(Object.keys(TITLE_COVER_COLORS).find((key) => TITLE_COVER_COLORS[key] === currentColor) || "");
    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % colorKeys.length;
        setTitleCoverColor(TITLE_COVER_COLORS[colorKeys[nextIndex]]);
    };
    const prevSlide = () => {
        const prevIndex = (currentIndex - 1 + colorKeys.length) % colorKeys.length;
        setTitleCoverColor(TITLE_COVER_COLORS[colorKeys[prevIndex]]);
    };
    return (_jsxs(S.SwiperContainer, { children: [_jsx(S.PrevButton, { onClick: prevSlide }), _jsx(S.ColorSelectContainer, { children: colorKeys.map((colorKey) => (_jsx(S.ColorCircleContainer, { onClick: () => setTitleCoverColor(TITLE_COVER_COLORS[colorKey]), children: _jsx(S.ColorCircle, { "$isSelected": TITLE_COVER_COLORS[colorKey] === currentColor, color: TITLE_COVER_COLORS[colorKey] }) }, colorKey))) }), _jsx(S.NextButton, { onClick: nextSlide })] }));
};
export default TitleCoverColorSwiper;
