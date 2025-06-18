import EditorJS from "@editorjs/editorjs";
export type ModalType = "place" | "emoji" | "line" | null;
export type AlignValue = "left" | "center" | "right" | "justify";
export interface EditorStore {
    editor: EditorJS | null;
    activeModal: ModalType;
    align: AlignValue;
    currentBlockIndex: number;
    setEditor: (editor: EditorJS) => void;
    toggleModal: (modalType: Exclude<ModalType, null>) => void;
    closeModal: () => void;
    setAlign: (align: AlignValue) => void;
    setCurrentBlockIndex: (index: number) => void;
}
