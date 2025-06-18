import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from "./TitleSection.style";
import TitleInputWrapper from "../../../components/Title/TitleInput/TitleInputWrapper/TitleInputWrapper";
import TitleCoverColorSwiper from "../../../components/Title/TitleTools/TitleCoverColor/TitleCoverColorSwiper/TitleCoverColorSwiper";
import useTitleStore from "../../../store/useTitleStore";
import useEditorStore from "../../../store/useEditorStore";
/**
 * 글의 제목 섹션을 담당하는 컴포넌트
 * 제목, 부제목, 커버 이미지/컬러 등을 관리
 */
export default function TitleSection() {
    // 제목 관련 상태값들을 전역 상태에서 가져옴
    const { titleText, 
    // subtitleText,
    titleCoverImage, titleCoverColor, isExpanded, alignment, titleFont, titleColor, } = useTitleStore();
    const { editor } = useEditorStore();
    /**
     * 저장 버튼 클릭 핸들러
     * Editor.js의 데이터와 제목 섹션의 데이터를 통합하여 저장
     */
    const onClickSave = () => {
        const titleData = {
            titleText: titleText,
            // subtitleText: subtitleText,
            titleCoverImage: titleCoverImage,
            imageExpanded: isExpanded,
            titleCoverColor: titleCoverColor,
            titleAlignment: alignment,
            titleFont: titleFont,
            titleColor: titleColor,
        };
        // Editor.js의 save 메서드를 호출하여 에디터 데이터와 제목 데이터를 통합
        editor
            ?.save()
            .then((outputData) => console.log("Article data: ", { ...outputData, titleData }))
            .catch((error) => console.log("Saving failed: ", error));
    };
    return (_jsxs(S.TitleSectionWrapper, { "$bgImage": titleCoverImage, "$expanded": isExpanded, "$bgColor": titleCoverColor, children: [_jsxs(S.TitleTopWrapper, { children: [_jsx(S.TitleMenuWrapper, { children: " " }), _jsx(S.TitleSaveWrapper, { id: "save-btn", onClick: onClickSave, children: "\uC800\uC7A5" })] }), _jsxs(S.TitleBottomWrapper, { children: [_jsx(TitleInputWrapper, {}), titleCoverColor && _jsx(TitleCoverColorSwiper, {})] })] }));
}
