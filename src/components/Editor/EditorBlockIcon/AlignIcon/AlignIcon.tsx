// ✅ AlignIcon.tsx
import * as S from "./AlignIcon.style";
import useEditorStore from "store/useEditorStore";

const alignValues = ["left", "center", "right", "justify"] as const;
type AlignValue = (typeof alignValues)[number];

/**
 * 텍스트 정렬을 위한 아이콘 컴포넌트
 * 클릭 시 현재 선택된 블록의 정렬 상태를 순환 변경함
 */
export default function AlignIcon() {
  const { editor, setAlign } = useEditorStore();

  const getNextAlign = (current: AlignValue): AlignValue => {
    const index = alignValues.indexOf(current);
    const nextIndex = (index + 1) % alignValues.length;
    return alignValues[nextIndex];
  };

  const handleToggleAlign = async () => {
    if (!editor) return;

    const blockIndex = editor.blocks.getCurrentBlockIndex();
    const savedData = await editor.save();
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

    // ✅ selection 복원
    editor.caret.setToBlock(blockIndex, "end");

    setAlign(nextAlign);
  };

  return (
    <S.AlignIcon
      $align={useEditorStore.getState().align}
      onClick={handleToggleAlign}
    />
  );
}
