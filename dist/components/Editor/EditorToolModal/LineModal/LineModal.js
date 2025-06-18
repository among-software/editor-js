import { jsx as _jsx } from "react/jsx-runtime";
import * as S from "./LineModal.style";
import useEditorStore from "../../../../store/useEditorStore";
import { LineData } from "./LineData";
/**
 * 구분선 선택을 위한 모달 컴포넌트
 * 다양한 스타일의 구분선을 제공하고 선택한 구분선을 에디터에 추가
 */
export default function LineModal({ addBlock }) {
    const { closeModal } = useEditorStore();
    const handleLineClick = (line) => {
        const lineData = {
            url: line.inBlockImageURL,
            imagePosition: line.inBlockImagePosition,
        };
        addBlock("delimiter", lineData);
        closeModal();
    };
    return (_jsx(S.LineModalWrapper, { children: LineData.map((line, index) => (_jsx(S.HrLine, { "$imagePosition": line.modalImagePosition, onClick: () => handleLineClick(line) }, index))) }));
}
