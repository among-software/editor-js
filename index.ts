// src/index.ts
import EditorSection from "./src/components/Editor/EditorSection/EditorSection";
import useEditorStore from "./src/store/useEditorStore";

export type { UploadHandler, UploadFile } from "./src/types/upload";

export default {
  EditorSection,
  useEditorStore,
};
