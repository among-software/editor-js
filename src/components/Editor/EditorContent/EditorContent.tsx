import { memo, useEffect, useRef } from "react";
import * as S from "./EditorContent.style";
import EditorJS from "@editorjs/editorjs";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import { EDITOR_JS_TOOLS } from "../../../constants/editorTools";
import useEditorStore from "../../../store/useEditorStore";
import { convertEditorDataToHtml } from "../../../utils/editorToHtml";

interface EditorContentProps {
  value?: any;
  onChange?: (data: { raw: any; html: string }) => void;
}

const EditorContent = memo(({ value, onChange }: EditorContentProps) => {
  const { setEditor } = useEditorStore();
  const editorInstanceRef = useRef<EditorJS | null>(null);

  // ✅ 블록 선택 기능 (Shift+클릭)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const block = el.closest(".ce-block") as HTMLElement;
      if (!block || !e.shiftKey) return;

      block.classList.toggle("block--selected");
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // ✅ 정렬 적용 함수
  const applyAlignmentToSelectedBlocks = async (
    align: "left" | "center" | "right" | "justify"
  ) => {
    const editor = editorInstanceRef.current;
    if (!editor) return;

    const savedData = await editor.save(); // 최신 block data 확보
    const selectedBlocks = document.querySelectorAll(
      ".ce-block.block--selected"
    );

    const allBlocks = Array.from(document.querySelectorAll(".ce-block"));

    selectedBlocks.forEach((blockEl) => {
      const blockIndex = allBlocks.indexOf(blockEl);

      // ✅ 최신 block data 사용
      const originalData = savedData.blocks[blockIndex]?.data;

      if (originalData) {
        const updatedData = {
          ...originalData,
          align,
          realText: originalData.realText || originalData.text || "",

          // 명시적으로 빠질 수 있는 스타일 보정
          letterSpacing: originalData.letterSpacing ?? "normal",
          lineHeight: originalData.lineHeight ?? "normal",
          isBold: originalData.isBold ?? false,
          isItalic: originalData.isItalic ?? false,
          fontSize: originalData.fontSize ?? "",
          fontFamily: originalData.fontFamily ?? "",
        };

        editor.blocks.update(blockIndex, updatedData);
        editor.caret.setToBlock(blockIndex, "end"); // 리렌더 유도
      }
    });
  };

  // ✅ 단축키로 정렬 실행 (Ctrl+Alt+1~4)
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey) {
        if (e.key === "1") applyAlignmentToSelectedBlocks("left");
        if (e.key === "2") applyAlignmentToSelectedBlocks("center");
        if (e.key === "3") applyAlignmentToSelectedBlocks("right");
        if (e.key === "4") applyAlignmentToSelectedBlocks("justify");
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  // ✅ 에디터 초기화
  useEffect(() => {
    if (!editorInstanceRef.current) {
      const editorInstance = new EditorJS({
        holder: "editorjs",
        autofocus: true,
        tools: EDITOR_JS_TOOLS as any,
        data: value || undefined,
        onReady: () => {
          console.log("✅ Editor is ready");
          new Undo({ editor: editorInstance });
          new DragDrop(editorInstance);
          setEditor(editorInstance);
        },
        onChange: async () => {
          try {
            const data = await editorInstance.save();
            const html = convertEditorDataToHtml(data);
            console.log(data);
            onChange?.({ raw: data, html });
          } catch (error) {
            console.error("❌ Failed to save editor data:", error);
          }
        },
      });

      editorInstanceRef.current = editorInstance;
    }
  }, [value, onChange]);

  return (
    <S.EditorContentContainer id="editorjs" style={{ cursor: "pointer" }} />
  );
});

export default EditorContent;
