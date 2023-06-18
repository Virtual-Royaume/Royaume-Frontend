import type { Component } from "#/lib/utils/component";
import { twMerge } from "tailwind-merge";
import type { LinkButtonProps } from "./link.type";
import { clsx } from "clsx";
import Link from "next/link";

export const LinkButton: Component<LinkButtonProps> = ({ className, children, ...props }) => {
  const styles = clsx(
    "flex items-center gap-2 bg-discord text-white rounded",
    "py-2 px-6 w-fit"
  );

  return <Link className={twMerge(styles, className)} {...props}>{children}</Link>;
};