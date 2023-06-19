export type UseSidebarState = {
  states: UseSidebarStates[];
  setOpened: (name: string) => void;
  setClosed: (name: string) => void;
  isOpened: (name: string) => boolean;
};

type UseSidebarStates = {
  name: string;
  opened: boolean;
};