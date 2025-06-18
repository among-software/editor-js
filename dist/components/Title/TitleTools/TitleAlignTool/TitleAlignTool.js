import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from "./TitleAlignTool.style";
import useTitleStore from "../../../../store/useTitleStore";
/**
 * 제목 섹션의 텍스트 정렬 도구 컴포넌트
 * 제목 텍스트의 수직 정렬(하단/중앙)을 토글하는 기능 제공
 */
export default function TitleAlignTool() {
    const titleCoverImage = useTitleStore((state) => state.titleCoverImage);
    const titleCoverColor = useTitleStore((state) => state.titleCoverColor);
    const titleAlign = useTitleStore((state) => state.alignment);
    const setTitleAlign = useTitleStore((state) => state.setAlignment);
    const handleTitleAlign = (alignType) => {
        setTitleAlign(alignType);
    };
    return (_jsxs(_Fragment, { children: [titleAlign === "bottom" && (_jsx(S.AlignBottomIcon, { onClick: () => handleTitleAlign("center"), "$hasCoverBg": !!titleCoverImage || !!titleCoverColor })), titleAlign === "center" && (_jsx(S.AlignCenterIcon, { onClick: () => handleTitleAlign("bottom"), "$hasCoverBg": !!titleCoverImage || !!titleCoverColor }))] }));
}
