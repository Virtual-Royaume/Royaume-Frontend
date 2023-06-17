import type { PropsWithChildren } from "react";

export type DropdownItemLink = PropsWithChildren & {
  href?: string;
  className?: string;
};

export type DropdownItemButton = PropsWithChildren & {
  className?: string;
  onClick?: () => void;
};

export type DropdownSeparator = {
  className?: string;
};

export type DropdownProps = PropsWithChildren & {
  label: string;
  icon?: string;
  iconSize?: number;
};