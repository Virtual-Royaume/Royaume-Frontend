import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export type DropdownItemLink = PropsWithChildren & ComponentPropsWithoutRef<"a"> & {
  href: string;
  className?: string;
};

export type DropdownItemButton = PropsWithChildren & ComponentPropsWithoutRef<"button"> & {
  className?: string;
  onClick?: () => void;
};

export type DropdownSeparator = ComponentPropsWithoutRef<"hr">;

export type DropdownProps = PropsWithChildren & {
  label: string;
  icon?: string;
  iconSize?: number;
};