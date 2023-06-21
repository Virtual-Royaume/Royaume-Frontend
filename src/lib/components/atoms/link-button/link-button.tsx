import type { LinkButtonProps } from "./link-button.type";
import { forwardRef } from "react";
import Link from "next/link";
import { sm } from "#/lib/utils/style/class";

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(({ className, children, ...props }, ref) => {
  const styles = sm(
    "flex items-center gap-2 bg-discord text-white rounded",
    "py-2 px-6 w-fit",
    className
  );

  return <Link ref={ref} className={styles} {...props}>{children}</Link>;
});

LinkButton.displayName = "LinkButton";