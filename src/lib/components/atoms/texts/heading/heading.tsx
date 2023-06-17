import type { Component } from "#/lib/utils/component";
import type { HeadingProps } from "./heading.type";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Heading: Component<HeadingProps> = ({ type, className, children }) => {
  const Tag = type;

  const styles = twMerge(
    clsx(
      "text-white",
      {
        "text-5xl": type === "h1",
        "text-4xl": type === "h2"
      }
    ),
    className
  );

  return <Tag className={styles}>{children}</Tag>;
};