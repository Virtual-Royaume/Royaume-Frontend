import type { Component } from "#/lib/utils/component";
import type { HeadingProps } from "./heading.type";
import { sm } from "#/lib/utils/style/class";

export const Heading: Component<HeadingProps> = ({ type, className, children, ...props }) => {
  const Tag = type;

  const styles = sm(
    "text-white",
    {
      "text-4xl lg:text-5xl": type === "h1",
      "text-3xl lg:text-4xl": type === "h2",
      "text-2xl lg:text-3xl": type === "h3",
      "text-xl": type === "h4"
    },
    className
  );

  return <Tag className={styles} {...props}>{children}</Tag>;
};