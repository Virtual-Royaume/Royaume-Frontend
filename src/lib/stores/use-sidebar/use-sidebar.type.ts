export type UseSidebarState = {
  items: UseSidebarItem[];
  toggle: (name: string) => void;
  isOpened: (name: string) => boolean;
};

export type UseSidebarItem = {
  name: string;
  opened: boolean;
};