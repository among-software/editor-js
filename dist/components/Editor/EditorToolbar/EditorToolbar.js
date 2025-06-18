import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AlignIcon, EmojiIcon, FileIcon, GroupImageIcon, ImageIcon, LineIcon, VideoIcon, } from "../../../components/Editor/EditorBlockIcon/index";
import { EditorToolModal, PlaceModal, EmojiModal, LineModal, } from "../../../components/Editor/EditorToolModal/index";
import FixedToolbar from "../../../components/Common/FixedToolbar/FixedToolbar";
import useEditorStore from "../../../store/useEditorStore";
import * as S from "./styles";
/**
 * 에디터의 툴바 컴포넌트
 * 블록을 추가할 수 있는 도구들을 제공
 */
export default function EditorToolbar({ toolbarTop, onUpload }) {
    const { editor, activeModal, currentBlockIndex, setCurrentBlockIndex } = useEditorStore();
    const handleBlockIndex = () => {
        if (!editor)
            return;
        const blockIndex = editor.blocks.getCurrentBlockIndex();
        const blocksCount = editor.blocks.getBlocksCount();
        if (blockIndex > -1) {
            setCurrentBlockIndex(blockIndex);
            return;
        }
        if (blocksCount === 1) {
            const firstBlock = editor.blocks.getBlockByIndex(0);
            const shouldUseFirstBlock = firstBlock?.name === "paragraph" && firstBlock.isEmpty;
            setCurrentBlockIndex(shouldUseFirstBlock ? 0 : 1);
            return;
        }
        setCurrentBlockIndex(Math.max(0, blocksCount - 1));
    };
    const addBlock = (type, data) => {
        if (!editor)
            return;
        const currentBlock = editor.blocks.getBlockByIndex(currentBlockIndex);
        const isEmptyParagraph = currentBlock?.name === "paragraph" && currentBlock.isEmpty;
        if (isEmptyParagraph) {
            editor.blocks.delete(currentBlockIndex);
            editor.blocks.insert(type, data, undefined, currentBlockIndex);
        }
        else {
            editor.blocks.insert(type, data, undefined, currentBlockIndex + 1);
        }
    };
    const onClickSave = () => {
        // Editor.js의 save 메서드를 호출하여 에디터 데이터와 제목 데이터를 통합
        editor
            ?.save()
            .then((outputData) => console.log("Article data: ", { ...outputData }))
            .catch((error) => console.log("Saving failed: ", error));
    };
    return (_jsxs(_Fragment, { children: [activeModal && (_jsxs(EditorToolModal, { top: toolbarTop, children: [activeModal === "place" && _jsx(PlaceModal, { addBlock: addBlock }), activeModal === "emoji" && _jsx(EmojiModal, { addBlock: addBlock }), activeModal === "line" && _jsx(LineModal, { addBlock: addBlock })] })), _jsxs(FixedToolbar, { position: { top: toolbarTop, right: 0 }, children: [_jsx(ImageIcon, { handleBlockIndex: handleBlockIndex, addBlock: addBlock, onUpload: onUpload }), _jsx(GroupImageIcon, { handleBlockIndex: handleBlockIndex, addBlock: addBlock, onUpload: onUpload }), _jsx(VideoIcon, { handleBlockIndex: handleBlockIndex, addBlock: addBlock, onUpload: onUpload }), _jsx(FileIcon, { handleBlockIndex: handleBlockIndex, addBlock: addBlock, onUpload: onUpload }), _jsx(EmojiIcon, { handleBlockIndex: handleBlockIndex }), _jsx(LineIcon, { handleBlockIndex: handleBlockIndex }), _jsx(AlignIcon, {}), _jsx(S.TitleSaveWrapper, { id: "save-btn", onClick: onClickSave, children: "\uC800\uC7A5" })] })] }));
}
