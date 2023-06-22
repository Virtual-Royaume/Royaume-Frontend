import type { Dispatch, SetStateAction } from "react";

export type HamburgerProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};