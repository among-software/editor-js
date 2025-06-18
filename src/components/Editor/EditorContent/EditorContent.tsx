import { memo, useEffect, useRef } from "react";
import * as S from "./EditorContent.style";
import EditorJS from "@editorjs/editorjs";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import { EDITOR_JS_TOOLS } from "../../../constants/editorTools";
import useEditorStore from "../../../store/useEditorStore";
import { convertEditorDataToHtml } from "../../../utils/editorToHtml"; // ✅ 추가

interface EditorContentProps {
  onChange?: (data: { raw: any; html: string }) => void; // ✅ 수정
}

/**
 * Editor.js를 초기화하고 관리하는 컴포넌트
 * 드래그&드롭, 실행취소 기능을 포함한 에디터 인스턴스를 생성
 */
const EditorContent = memo(({ onChange }: EditorContentProps) => {
  const { setEditor } = useEditorStore();
  const editorInstanceRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorInstanceRef.current) {
      const editorInstance = new EditorJS({
        holder: "editorjs",
        autofocus: true,
        tools: EDITOR_JS_TOOLS,
        onReady: () => {
          console.log("✅ Editor is ready");
          new Undo({ editor: editorInstance });
          new DragDrop(editorInstance);
          setEditor(editorInstance);
        },
        onChange: async () => {
          console.log("📝 EditorJS: change detected");
          try {
            const data = await editorInstance.save();
            const html = convertEditorDataToHtml(data); // ✅ HTML 변환
            console.log("✅ Saved editor data:", data);
            console.log("✅ Saved html data:", html);
            onChange?.({ raw: data, html }); // ✅ HTML과 원본 JSON 동시 전달
          } catch (error) {
            console.error("❌ Failed to save editor data:", error);
          }
        },
      });

      editorInstanceRef.current = editorInstance;
    }
  }, [onChange]);

  return (
    <S.EditorContentContainer id="editorjs" style={{ cursor: "pointer" }} />
  );
});

export default EditorContent;
