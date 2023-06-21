import type { LinkButtonProps } from "./link.type";
import { forwardRef } from "react";
import { sm } from "#/lib/utils/style/class";
import Link from "next/link";

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(({ className, children, ...props }, ref) => {
  const styles = sm(
    "flex items-center gap-2 bg-discord text-white rounded",
    "py-2 px-6 w-fit",
    className
  );

  return <Link ref={ref} className={styles} {...props}>{children}</Link>;
});

LinkButton.displayName = "LinkButton";