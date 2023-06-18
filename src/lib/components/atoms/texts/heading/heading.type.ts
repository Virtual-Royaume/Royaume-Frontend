import type { ComponentProps, PropsWithChildren } from "react";

export type HeadingProps = PropsWithChildren & ComponentProps<"h1"> & {
  type: "h1" | "h2" | "h3" | "h4";
};