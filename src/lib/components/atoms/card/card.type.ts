import type { ComponentPropsWithoutRef } from "react";

export type CardProps = ComponentPropsWithoutRef<"div"> & {
  border?: "full" | "l" | "r" | "t" | "b" | "y" | "x";
  hoverable?: boolean;
};