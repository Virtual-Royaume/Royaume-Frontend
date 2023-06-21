import type { ComponentPropsWithRef } from "react";
import type { ChangeHandler } from "react-hook-form";

export type SelectProps = ComponentPropsWithRef<"div"> & {
  disabled?: boolean;
  name?: string;
  required?: boolean;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  placeholder?: string;
  items: string[];
};