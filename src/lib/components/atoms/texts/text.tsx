import type { Component } from "#/lib/utils/component";
import type { TextProps } from "./text.type";

export const Text: Component<TextProps> = ({ className, children, ...props }) => {
  return (
    <p className={className} {...props}>{children}</p>
  );
};