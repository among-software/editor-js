import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from "./TitleToolbar.style";
import TitleCoverImageTool from "../../../components/Title/TitleTools/TitleCoverImageTool/TitleCoverImageTool";
import TitleCoverImageActiveTool from "../../../components/Title/TitleTools/TitleCoverImageActiveTool/TitleCoverImageActiveTool";
import TitleCoverColorIcon from "../../Title/TitleTools/TitleCoverColor/TitleCoverColorIcon/TitleCoverColorIcon";
import TitleAlignTool from "../../Title/TitleTools/TitleAlignTool/TitleAlignTool";
import useTitleStore from "../../../store/useTitleStore";
/**
 * 제목 섹션의 도구 모음 컴포넌트
 * 커버 이미지, 커버 컬러, 정렬 등의 도구들을 포함
 */
export default function TitleToolbar() {
    const titleImage = useTitleStore((state) => state.titleCoverImage);
    return (_jsxs(S.TitleToolbarWrapper, { children: [_jsx(TitleCoverImageTool, {}), !titleImage && _jsx(TitleCoverColorIcon, {}), _jsx(TitleAlignTool, {}), titleImage && _jsx(TitleCoverImageActiveTool, {})] }));
}
