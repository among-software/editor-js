import EditorSection from "./src/components/Editor/EditorSection/EditorSection";
export type { UploadHandler, UploadFile } from "./src/types/upload";
declare const _default: {
    EditorSection: typeof EditorSection;
    useEditorStore: import("zustand").UseBoundStore<import("zustand").StoreApi<import("./src/types/store/editor.types").EditorStore>>;
};
export default _default;
