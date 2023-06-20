import { create } from "zustand";

type Store = {
  toggled: boolean;
  toggle: () => void;
}

export const useSidebarToggledStore = create<Store>((set) => ({
  toggled: false,
  toggle: () => set((state) => ({ toggled: !state.toggled }))
}));