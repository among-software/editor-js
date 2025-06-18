import { memo, useEffect, useRef } from "react";
import * as S from "./EditorContent.style";
import EditorJS from "@editorjs/editorjs";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import { EDITOR_JS_TOOLS } from "../../../constants/editorTools";
import useEditorStore from "../../../store/useEditorStore";

interface EditorContentProps {
  onChange?: (data: any) => void;
}

/**
 * Editor.js를 초기화하고 관리하는 컴포넌트
 * 드래그&드롭, 실행취소 기능을 포함한 에디터 인스턴스를 생성
 */
interface EditorContentProps {
  onChange?: (data: any) => void;
}

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
          new Undo({ editor: editorInstance });
          new DragDrop(editorInstance);
          setEditor(editorInstance);
        },
        onChange: async () => {
          if (onChange) {
            const content = await editorInstance.save();
            onChange(content);
          }
        },
      });

      editorInstanceRef.current = editorInstance;
    }

    return () => {
      editorInstanceRef.current?.destroy?.();
      editorInstanceRef.current = null;
    };
  }, []);

  return (
    <S.EditorContentContainer id="editorjs" style={{ cursor: "pointer" }} />
  );
});

export default EditorContent;
