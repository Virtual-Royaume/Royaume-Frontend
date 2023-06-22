"use client";

import type { Component } from "#/lib/utils/component";
import type { TabsProps } from "./tabs.type";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { s } from "#/lib/utils/style/class";

export const Tabs: Component<TabsProps> = ({ links }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-2">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className={s(
            "px-3 py-2 rounded text-white-desc hover:bg-background-info transition-colors",
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