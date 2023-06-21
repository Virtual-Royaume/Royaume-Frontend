import type { Component } from "#/lib/utils/component";
import type { TextProps } from "./text.type";
import { sm } from "#/lib/utils/style/class";

export const Text: Component<TextProps> = ({ className, children, ...props }) => {
  const styles = "text-white-desc";

  return <p className={sm(styles, className)} {...props}>{children}</p>;
};