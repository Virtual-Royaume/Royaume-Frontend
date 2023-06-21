import type { ComponentPropsWithRef } from "react";

export type InputProps = ComponentPropsWithRef<"input"> & {
  error?: boolean;
};