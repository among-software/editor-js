import { create } from "zustand";
import { EditorStore } from "../types/store/editor.types";

const useEditorStore = create<EditorStore>((set) => ({
  editor: null,
  activeModal: null,
  align: "left",
  currentBlockIndex: -1,
  selectedBlockIds: [], // ✅ 선택된 블럭 ID 목록 추가

  setEditor: (editor) => set({ editor }),

  toggleModal: (modalType) => {
    set((state) => ({
      activeModal: state.activeModal === modalType ? null : modalType,
    }));
  },

  closeModal: () => set({ activeModal: null }),

  setAlign: (align) => set({ align }),

  setCurrentBlockIndex: (index) => set({ currentBlockIndex: index }),

  // ✅ 선택 블럭 ID 설정 함수
  setSelectedBlockIds: (ids) => set({ selectedBlockIds: ids }),

  // ✅ 특정 블럭 ID 추가
  addSelectedBlockId: (id) =>
    set((state) => ({
      selectedBlockIds: Array.from(new Set([...state.selectedBlockIds, id])),
    })),

  // ✅ 특정 블럭 ID 제거
  removeSelectedBlockId: (id) =>
    set((state) => ({
      selectedBlockIds: state.selectedBlockIds.filter((b) => b !== id),
    })),

  // ✅ 전체 초기화
  clearSelectedBlockIds: () => set({ selectedBlockIds: [] }),
}));

export default useEditorStore;
