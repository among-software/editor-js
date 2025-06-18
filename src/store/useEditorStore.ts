import { create } from "zustand";
import { EditorStore } from "../types/store/editor.types";

const useEditorStore = create<EditorStore>((set) => ({
  editor: null,
  activeModal: null,
  align: "left",
  currentBlockIndex: -1,

  setEditor: (editor) => set({ editor }),

  toggleModal: (modalType) => {
    set((state) => ({
      activeModal: state.activeModal === modalType ? null : modalType,
    }));
  },

  closeModal: () => set({ activeModal: null }),

  setAlign: (align) => set({ align }),

  setCurrentBlockIndex: (index) => set({ currentBlockIndex: index }),
}));

export default useEditorStore;
