import type { ComponentPropsWithoutRef } from "react";

export type LabelProps = ComponentPropsWithoutRef<"label"> & {
  title: string;
  error?: string;
  required?: boolean;
};