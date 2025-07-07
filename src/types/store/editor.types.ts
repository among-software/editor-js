import EditorJS from "@editorjs/editorjs";

export type ModalType = "place" | "emoji" | "line" | null;
export type AlignValue = "left" | "center" | "right" | "justify";

export interface EditorStore {
  editor: EditorJS | null;
  activeModal: ModalType;
  align: AlignValue;
  currentBlockIndex: number;

  // 기존 메서드
  setEditor: (editor: EditorJS) => void;
  toggleModal: (modalType: Exclude<ModalType, null>) => void;
  closeModal: () => void;
  setAlign: (align: AlignValue) => void;
  setCurrentBlockIndex: (index: number) => void;

  // ✅ 선택된 블럭 ID 관련 상태 및 메서드
  selectedBlockIds: string[];
  setSelectedBlockIds: (ids: string[]) => void;
  addSelectedBlockId: (id: string) => void;
  removeSelectedBlockId: (id: string) => void;
  clearSelectedBlockIds: () => void;

  // ✅ 인라인 툴바 위치
  toolbarPosition: { top: number; left: number };
  setToolbarPosition: (pos: { top: number; left: number }) => void;
}
