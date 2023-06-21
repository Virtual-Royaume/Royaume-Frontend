import { create } from "zustand";

type StoreState = {
  toggled: boolean;
  toggle: () => void;
  close: () => void;
}

export const useSidebarToggledStore = create<StoreState>((set) => ({
  toggled: false,
  toggle: () => set((state) => ({ toggled: !state.toggled })),
  close: () => set(() => ({ toggled: false }))
}));