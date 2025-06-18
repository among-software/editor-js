import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useEffect, useRef } from "react";
import * as S from "./EditorContent.style";
import EditorJS from "@editorjs/editorjs";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import { EDITOR_JS_TOOLS } from "../../../constants/editorTools";
import useEditorStore from "../../../store/useEditorStore";
/**
 * Editor.js를 초기화하고 관리하는 컴포넌트
 * 드래그&드롭, 실행취소 기능을 포함한 에디터 인스턴스를 생성
 */
const EditorContent = memo(({ onChange }) => {
    const { setEditor } = useEditorStore();
    const editorInstanceRef = useRef(null);
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
                        console.log("✅ Saved editor data:", data);
                        onChange?.(data);
                    }
                    catch (error) {
                        console.error("❌ Failed to save editor data:", error);
                    }
                },
            });
            editorInstanceRef.current = editorInstance;
        }
    }, [onChange]);
    return (_jsx(S.EditorContentContainer, { id: "editorjs", style: { cursor: "pointer" } }));
});
export default EditorContent;
