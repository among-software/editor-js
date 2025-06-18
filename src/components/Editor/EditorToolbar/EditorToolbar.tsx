import {
  AlignIcon,
  EmojiIcon,
  FileIcon,
  GroupImageIcon,
  ImageIcon,
  LineIcon,
  PlaceIcon,
  VideoIcon,
} from "@/components/Editor/EditorBlockIcon/index";

import {
  EditorToolModal,
  PlaceModal,
  EmojiModal,
  LineModal,
} from "@/components/Editor/EditorToolModal/index";

import FixedToolbar from "@/components/Common/FixedToolbar/FixedToolbar";
import useEditorStore from "@/store/useEditorStore";
import { UploadHandler } from "@/types/upload";

interface Props {
  toolbarTop: number;
  onUpload?: UploadHandler;
}

/**
 * 에디터의 툴바 컴포넌트
 * 블록을 추가할 수 있는 도구들을 제공
 */
export default function EditorToolbar({ toolbarTop, onUpload }: Props) {
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

  return (
    <>
      {activeModal && (
        <EditorToolModal top={toolbarTop}>
          {activeModal === "place" && <PlaceModal addBlock={addBlock} />}
          {activeModal === "emoji" && <EmojiModal addBlock={addBlock} />}
          {activeModal === "line" && <LineModal addBlock={addBlock} />}
        </EditorToolModal>
      )}

      <FixedToolbar position={{ top: toolbarTop, right: 0 }}>
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
      </FixedToolbar>
    </>
  );
}
