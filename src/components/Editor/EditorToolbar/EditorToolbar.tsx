import {
  AlignIcon,
  EmojiIcon,
  FileIcon,
  GroupImageIcon,
  ImageIcon,
  LineIcon,
  PlaceIcon,
  VideoIcon,
} from "../../../components/Editor/EditorBlockIcon/index";

import {
  EditorToolModal,
  PlaceModal,
  EmojiModal,
  LineModal,
} from "../../../components/Editor/EditorToolModal/index";

import FixedToolbar from "../../../components/Common/FixedToolbar/FixedToolbar";
import useEditorStore from "../../../store/useEditorStore";
import { UploadHandler } from "../../../types/upload";
import * as S from "./styles";

interface Props {
  toolbarTop: number;
  width: string;
  onUpload?: UploadHandler;
}

/**
 * 에디터의 툴바 컴포넌트
 * 블록을 추가할 수 있는 도구들을 제공
 */
export default function EditorToolbar({ toolbarTop, onUpload, width }: Props) {
  const { editor, activeModal, currentBlockIndex, setCurrentBlockIndex } =
    useEditorStore();

  const handleBlockIndex = () => {
    if (!editor) return;

    const blockIndex = editor.blocks.getCurrentBlockIndex();
    const blocksCount = editor.blocks.getBlocksCount();

    if (blockIndex > -1) {
      setCurrentBlockIndex(blockIndex);
      return;
    }

    if (blocksCount === 1) {
      const firstBlock = editor.blocks.getBlockByIndex(0);
      const shouldUseFirstBlock =
        firstBlock?.name === "paragraph" && firstBlock.isEmpty;
      setCurrentBlockIndex(shouldUseFirstBlock ? 0 : 1);
      return;
    }

    setCurrentBlockIndex(Math.max(0, blocksCount - 1));
  };

  const addBlock = (type: string, data: object) => {
    if (!editor) return;

    const currentBlock = editor.blocks.getBlockByIndex(currentBlockIndex);
    const isEmptyParagraph =
      currentBlock?.name === "paragraph" && currentBlock.isEmpty;

    if (isEmptyParagraph) {
      editor.blocks.delete(currentBlockIndex);
      editor.blocks.insert(type, data, undefined, currentBlockIndex);
    } else {
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

  return (
    <>
      {activeModal && (
        <EditorToolModal top={40}>
          {activeModal === "place" && <PlaceModal addBlock={addBlock} />}
          {activeModal === "emoji" && <EmojiModal addBlock={addBlock} />}
          {activeModal === "line" && <LineModal addBlock={addBlock} />}
        </EditorToolModal>
      )}

      <FixedToolbar
        position={{ top: toolbarTop, right: 0, width: width ?? "768px" }}
      >
        <ImageIcon
          handleBlockIndex={handleBlockIndex}
          addBlock={addBlock}
          onUpload={onUpload}
        />
        <GroupImageIcon
          handleBlockIndex={handleBlockIndex}
          addBlock={addBlock}
          onUpload={onUpload}
        />
        <VideoIcon
          handleBlockIndex={handleBlockIndex}
          addBlock={addBlock}
          onUpload={onUpload}
        />
        <FileIcon
          handleBlockIndex={handleBlockIndex}
          addBlock={addBlock}
          onUpload={onUpload}
        />
        {/* <PlaceIcon handleBlockIndex={handleBlockIndex} /> */}
        <EmojiIcon handleBlockIndex={handleBlockIndex} />
        <LineIcon handleBlockIndex={handleBlockIndex} />
        <AlignIcon />
        {/* <S.TitleSaveWrapper id="save-btn" onClick={onClickSave}>
          저장
        </S.TitleSaveWrapper> */}
      </FixedToolbar>
    </>
  );
}
