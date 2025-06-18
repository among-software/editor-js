import { jsx as _jsx } from "react/jsx-runtime";
// ✅ AlignIcon.tsx
import * as S from "./AlignIcon.style";
import useEditorStore from "../../../../store/useEditorStore";
const alignValues = ["left", "center", "right", "justify"];
export default function AlignIcon() {
    const { editor, align, setAlign } = useEditorStore();
    const getNextAlign = (current) => {
        const index = alignValues.indexOf(current);
        const nextIndex = (index + 1) % alignValues.length;
        return alignValues[nextIndex];
    };
    const handleToggleAlign = async () => {
        if (!editor)
            return;
        const blockIndex = editor.blocks.getCurrentBlockIndex();
        const savedData = await editor.save();
        const block = savedData.blocks[blockIndex];
        const blockElement = document.querySelector(`.ce-block[data-id="${block.id}"] .ce-paragraph`);
        const currentAlign = (blockElement?.style.textAlign ||
            "left");
        const nextAlign = getNextAlign(currentAlign);
        if (blockElement) {
            blockElement.style.textAlign = nextAlign;
        }
        editor.caret.setToBlock(blockIndex, "end");
        setAlign(nextAlign);
    };
    return _jsx(S.AlignIcon, { "$align": align, onClick: handleToggleAlign });
}
