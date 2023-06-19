import type { LinkButtonProps } from "./link.type";
import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";
import Link from "next/link";
import { s } from "#/lib/utils/style/class";

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(({ className, children, ...props }, ref) => {
  const styles = s(
    "flex items-center gap-2 bg-discord text-white rounded",
    "py-2 px-6 w-fit"
  );

  return <Link ref={ref} className={twMerge(styles, className)} {...props}>{children}</Link>;
});

LinkButton.displayName = "LinkButton";