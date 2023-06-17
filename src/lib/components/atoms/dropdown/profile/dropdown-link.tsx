import type { Component } from "#/lib/utils/component";
import clsx from "clsx";
import type { DropdownItemLink } from "./dropdown.type";
import Link from "next/link";

export const DropdownLink: Component<DropdownItemLink> = ({ className, href, children, ...props }) => {
  return (
    <Link className={clsx(
      "flex items-center gap-2 block w-full px-4 py-2 text-sm text-white-desc",
      "hover:bg-background-card-hover hover:text-gray-900",
      className ?? ""
    )} href={href} {...props}>
      {children}
    </Link>
  );
};