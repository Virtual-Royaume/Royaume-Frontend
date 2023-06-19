import type { ComponentPropsWithoutRef } from "react";

export type SelectProps = ComponentPropsWithoutRef<"div"> & {
  disabled?: boolean;
  placeholder?: string;
  items: string[];
};