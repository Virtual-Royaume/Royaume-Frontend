import type { ComponentPropsWithRef } from "react";

export type SelectProps = ComponentPropsWithRef<"div"> & {
  disabled?: boolean;
  name: string;
  required?: boolean;
  placeholder?: string;
  items: string[];
};