import { memo, useEffect, useRef } from "react";
import * as S from "./EditorContent.style";
import EditorJS from "@editorjs/editorjs";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import { EDITOR_JS_TOOLS } from "../../../constants/editorTools";
import useEditorStore from "../../../store/useEditorStore";
import { convertEditorDataToHtml } from "../../../utils/editorToHtml";

interface EditorContentProps {
  value?: any; // ✅ 초기 데이터 추가
  onChange?: (data: { raw: any; html: string }) => void;
}

const EditorContent = memo(({ value, onChange }: EditorContentProps) => {
  const { setEditor } = useEditorStore();
  const editorInstanceRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorInstanceRef.current) {
      const editorInstance = new EditorJS({
        holder: "editorjs",
        autofocus: true,
        tools: EDITOR_JS_TOOLS as any,
        data: value || undefined, // ✅ 초기값 적용
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
            onChange?.({ raw: data, html });
          } catch (error) {
            console.error("❌ Failed to save editor data:", error);
          }
        },
      });

      editorInstanceRef.current = editorInstance;
    }
  }, [value, onChange]); // ✅ value도 의존성에 포함

  return (
    <S.EditorContentContainer id="editorjs" style={{ cursor: "pointer" }} />
  );
});

export default EditorContent;
