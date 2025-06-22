// ✅ AlignIcon.tsx
import * as S from "./AlignIcon.style";
import useEditorStore from "../../../../store/useEditorStore";

const alignValues = ["left", "center", "right", "justify"] as const;
type AlignValue = (typeof alignValues)[number];

export default function AlignIcon() {
  const { editor, align, setAlign } = useEditorStore();

  const getNextAlign = (current: AlignValue): AlignValue => {
    const index = alignValues.indexOf(current);
    const nextIndex = (index + 1) % alignValues.length;
    return alignValues[nextIndex];
  };

  const handleToggleAlign = async () => {
    if (!editor) return;

    const savedData = await editor.save();
    let blockIndex = editor.blocks.getCurrentBlockIndex();

    // 블록이 선택되지 않았을 경우 fallback: 마지막 블록으로
    if (blockIndex === -1) {
      blockIndex = savedData.blocks.length - 1;
    }

    const block = savedData.blocks[blockIndex];
    const blockElement = document.querySelector(
      `.ce-block[data-id="${block.id}"] .ce-paragraph`
    ) as HTMLElement;

    const currentAlign = (blockElement?.style.textAlign ||
      "left") as AlignValue;
    const nextAlign = getNextAlign(currentAlign);

    if (blockElement) {
      blockElement.style.textAlign = nextAlign;
    }

    // 커서를 강제로 해당 블록으로 옮김
    editor.caret.setToBlock(blockIndex, "end");

    setAlign(nextAlign);
  };

  return <S.AlignIcon $align={align} onClick={handleToggleAlign} />;
}
