import type { Component } from "#/lib/utils/component";
import type { TextProps } from "./text.type";
import { twMerge } from "tailwind-merge";

export const Text: Component<TextProps> = ({ className, children, ...props }) => {
  const styles = "text-white-desc";

  return <p className={twMerge(styles, className)} {...props}>{children}</p>;
};