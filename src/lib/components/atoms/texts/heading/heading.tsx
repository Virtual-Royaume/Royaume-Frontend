import type { Component } from "#/lib/utils/component";
import { twMerge } from "tailwind-merge";
import type { HeadingProps } from "./heading.type";
import { sm } from "#/lib/utils/style/class";

export const Heading: Component<HeadingProps> = ({ type, className, children, ...props }) => {
  const Tag = type;

  const styles = sm(
    "text-white",
    {
      "text-5xl": type === "h1",
      "text-4xl": type === "h2"
    },
    className
  );

  return <Tag className={twMerge(styles, className)} {...props}>{children}</Tag>;
};