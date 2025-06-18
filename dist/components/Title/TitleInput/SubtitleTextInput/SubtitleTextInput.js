import { jsx as _jsx } from "react/jsx-runtime";
import ContentEditable from "../../../../components/Common/ContentEditable/ContentEditable";
import { COMMON_THEME } from "../../../../styles/Theme";
import useTitleStore from "../../../../store/useTitleStore";
/**
 * 글의 소제목을 입력받는 컴포넌트
 * 배경 이미지나 색상에 따라 텍스트 색상이 자동으로 조정됨
 */
export default function SubtitleTextInput() {
    const setSubtitleText = useTitleStore((state) => state.setSubtitleText);
    const titleImage = useTitleStore((state) => state.titleCoverImage);
    const titleCoverColor = useTitleStore((state) => state.titleCoverColor);
    return (_jsx(ContentEditable, { placeholder: "\uC18C\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694", maxLength: 40, exceedMessage: "\uC18C\uC81C\uBAA9\uC740 40\uC790 \uC774\uC0C1 \uC785\uB825\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", fontSize: 16, fontWeight: 300, onChange: setSubtitleText, fontColor: titleImage || titleCoverColor
            ? COMMON_THEME.white_primary
            : COMMON_THEME.black_primary, placeholderColor: titleCoverColor ? COMMON_THEME.white_primary : COMMON_THEME.gray_primary, cursorColor: titleImage || titleCoverColor
            ? COMMON_THEME.white_primary
            : COMMON_THEME.black_primary }));
}
