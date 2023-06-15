import type { Component } from "@lib/utils/component";
import type { HeadingProps } from "./heading.type";
import clsx from "clsx";

export const Heading: Component<HeadingProps> = ({ type, className, children }) => {
  const Tag = type;

  const styles = clsx(
    className,
    "text-white",
    {
      "text-5xl": type === "h1",
      "text-4xl": type === "h2"
    }
  );

  return <Tag className={styles}>{children}</Tag>
};