import type { UseSidebarItem, UseSidebarState } from "./use-sidebar.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSidebarStore = create<UseSidebarState>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (name: string) => {
        const allItems = get().items;
        let opened = false;

        const itemIndex = get().items.findIndex((s) => s.name === name);
        if (itemIndex >= 0) opened = !allItems[itemIndex].opened;

        const newItem: UseSidebarItem = { name, opened };

        const newStates = [newItem, ...allItems].filter((item, index, self) => {
          return index === self.findIndex((t) => {
            return t.name === item.name;
          });
        });

        set({ items: newStates });
      },
      isOpened: (name: string) =>  {
        const findItem = get().items.find((s) => s.name === name);
        if (!findItem) return true;

        return findItem.opened;
      }
    }),
    {
      name: "sidebar-storage"
    }
  )
);