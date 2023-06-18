import type { Component } from "#/lib/utils/component";
import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "./button.type";
import { clsx } from "clsx";

export const Button: Component<ButtonProps> = ({ className, children, ...props }) => {
  const styles = clsx(
    "flex items-center gap-2 bg-discord text-white rounded",
    "py-2 px-6 w-fit"
  );

  return <button className={twMerge(styles, className)} {...props}>{children}</button>;
};