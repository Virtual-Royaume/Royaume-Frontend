import type { PropsWithChildren } from "react";

export type ItemLink = {
  name: string;
  icon?: string;
  href?: string;
};

export type ItemButton = {
  name: string;
  icon?: string;
  onClick?: () => void;
};

export type Item = ItemLink | ItemButton;

export type DropdownProps = PropsWithChildren<{
  items: Item[];
}>;