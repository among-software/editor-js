import * as S from "./AlignIcon.style";
import useEditorStore from "../../../../store/useEditorStore";
import { IconLabel } from "../index.style";

const alignValues = ["left", "center", "right", "justify"] as const;
type AlignValue = (typeof alignValues)[number];

export default function AlignIcon() {
  const { editor, align, setAlign, selectedBlockIds } =
    useEditorStore.getState();

  const getNextAlign = (current: AlignValue): AlignValue => {
    const index = alignValues.indexOf(current);
    return alignValues[(index + 1) % alignValues.length];
  };

  const handleToggleAlign = async () => {
    const { editor, selectedBlockIds, setAlign, setSelectedBlockIds } =
      useEditorStore.getState();

    if (!editor || selectedBlockIds.length === 0) {
      console.warn("[정렬] 선택된 블럭이 없습니다.");
      return;
    }

    const savedData = await editor.save();
    const blocksToUpdate = savedData.blocks.filter(
      (b) => typeof b.id === "string" && selectedBlockIds.includes(b.id)
    );

    console.log(savedData.blocks);
    console.log(blocksToUpdate.at(-1));

    const nextAlign = getNextAlign(
      (blocksToUpdate.at(-1)?.data.align || "left") as AlignValue
    );

    console.log("asdf2", blocksToUpdate.at(-1)?.data.align);
    console.log("asdf", nextAlign);

    for (const block of blocksToUpdate) {
      const currentAlign = (block.data.align || "left") as AlignValue;
      console.log(`[정렬] ${block.id} → ${currentAlign} → ${nextAlign}`);

      await editor.blocks.update(block.id!, {
        ...block.data,
        align: nextAlign,
      });
    }

    // ✅ 선택 복원
    setTimeout(() => {
      setSelectedBlockIds(selectedBlockIds); // 다시 선택된 상태 유지
    }, 0);

    setAlign(nextAlign);
  };

  return (
    <S.AlignIconWrapper>
      <S.AlignIcon $align={align} onClick={handleToggleAlign} />
      <IconLabel>정렬</IconLabel>
    </S.AlignIconWrapper>
  );
}
