import type { LinkButtonProps } from "./link.type";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { forwardRef } from "react";
import Link from "next/link";

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(({ className, children, ...props }, ref) => {
  const styles = clsx(
    "flex items-center gap-2 bg-discord text-white rounded",
    "py-2 px-6 w-fit"
  );

  return <Link ref={ref} className={twMerge(styles, className)} {...props}>{children}</Link>;
});

LinkButton.displayName = "LinkButton";