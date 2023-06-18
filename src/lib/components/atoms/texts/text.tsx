import type { Component } from "#/lib/utils/component";
import clsx from "clsx";
import type { TextProps } from "./text.type";

export const Text: Component<TextProps> = ({ className, children, ...props }) => {
  return (
    <p className={clsx(
      className,
      "text-white-desc",
    )} {...props}>{children}</p>
  );
};