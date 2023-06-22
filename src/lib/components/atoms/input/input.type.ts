import type { ComponentPropsWithRef, ReactElement } from "react";

export type InputProps = ComponentPropsWithRef<"input"> & {
  error?: boolean;
  icon?: ReactElement;
};