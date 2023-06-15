"use client";

import type { Component } from "#/lib/utils/component";
import type { LittleNavbarProps } from "./little-navbar.type";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export const LittleNavbar: Component<LittleNavbarProps> = ({ links }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-2">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className={clsx(
            "px-3 py-2 rounded-md text-white-desc hover:bg-background-info transition-colors",
            {
              "bg-background-info": link.href === pathname
            }
          )}>
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};