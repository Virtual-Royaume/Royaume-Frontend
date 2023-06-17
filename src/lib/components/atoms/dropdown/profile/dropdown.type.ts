import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";

export type DropdownItemLink = PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  className?: string;
};

export type DropdownItemButton = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> & {
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