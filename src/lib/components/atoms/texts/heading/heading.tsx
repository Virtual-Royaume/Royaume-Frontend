import type { Component } from "#/lib/utils/component";
import { twMerge } from "tailwind-merge";
import type { HeadingProps } from "./heading.type";
import { clsx } from "clsx";

export const Heading: Component<HeadingProps> = ({ type, className, children, ...props }) => {
  const Tag = type;

  const styles = clsx(
    "text-white",
    {
      "text-5xl": type === "h1",
      "text-4xl": type === "h2"
    }
  );

  return <Tag className={twMerge(styles, className)} {...props}>{children}</Tag>;
};