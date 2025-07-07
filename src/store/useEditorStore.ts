import { create } from "zustand";
import { EditorStore } from "../types/store/editor.types";

const useEditorStore = create<EditorStore>((set) => ({
  editor: null,
  activeModal: null,
  align: "left",
  currentBlockIndex: -1,
  selectedBlockIds: [],
  toolbarPosition: { top: 0, left: 0 }, // ✅ 툴바 위치 상태 추가

  selectionRange: null,

  setSelectionRange: (range) => set({ selectionRange: range }),

  setEditor: (editor) => set({ editor }),

  toggleModal: (modalType) => {
    set((state) => ({
      activeModal: state.activeModal === modalType ? null : modalType,
    }));
  },

  closeModal: () => set({ activeModal: null }),

  setAlign: (align) => set({ align }),

  setCurrentBlockIndex: (index) => set({ currentBlockIndex: index }),

  setSelectedBlockIds: (ids) => set({ selectedBlockIds: ids }),

  addSelectedBlockId: (id) =>
    set((state) => ({
      selectedBlockIds: Array.from(new Set([...state.selectedBlockIds, id])),
    })),

  removeSelectedBlockId: (id) =>
    set((state) => ({
      selectedBlockIds: state.selectedBlockIds.filter((b) => b !== id),
    })),

  clearSelectedBlockIds: () => set({ selectedBlockIds: [] }),

  setToolbarPosition: (pos) => set({ toolbarPosition: pos }), // ✅ 툴바 위치 setter 추가
}));

export default useEditorStore;
