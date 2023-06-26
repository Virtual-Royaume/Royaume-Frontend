import type { Component } from "#/lib/utils/component";
import { sm } from "#/lib/utils/style/class";
import type { TextProps } from "./text.type";

export const Text: Component<TextProps> = ({ className, children, ...props }) => {
  const styles = "text-gray-500";

  return <p className={sm(styles, className)} {...props}>{children}</p>;
};