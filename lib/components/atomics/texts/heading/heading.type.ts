import { PropsWithChildren } from "react";

export type HeadingProps = PropsWithChildren & {
  type: "h1" | "h2" | "h3" | "h4",
  className?: string
};