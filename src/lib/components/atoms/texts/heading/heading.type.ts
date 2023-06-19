import type { ComponentPropsWithoutRef } from "react";

export type HeadingProps = ComponentPropsWithoutRef<"h1"> & {
  type: "h1" | "h2" | "h3" | "h4";
};