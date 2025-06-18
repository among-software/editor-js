import { jsx as _jsx } from "react/jsx-runtime";
import * as S from "./LineIcon.style";
import useEditorStore from "../../../../store/useEditorStore";
/**
 * 선 그리기를 위한 아이콘 컴포넌트
 * 클릭 시 선 그리기 모달을 열고 블록 인덱스를 업데이트
 */
export default function LineIcon({ handleBlockIndex }) {
    const { toggleModal } = useEditorStore();
    const handleIconClick = () => {
        handleBlockIndex();
        toggleModal("line");
    };
    return _jsx(S.LineIcon, { className: "modal-active-icon", onClick: handleIconClick });
}
