import type { PropsWithChildren } from "react";

export type DropdownItemLink = {
  name: string;
  icon?: string;
  href?: string;
};

export type DropdownItemButton = {
  name: string;
  icon?: string;
  onClick?: () => void;
};

export type Item = DropdownItemLink | DropdownItemButton;

export type DropdownProps = PropsWithChildren<{
  items: Item[];
}>;