"use client";

import type { Component } from "#/lib/utils/component";
import type { SidebarSectionProps } from "./sidebar-section.type";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const SidebarSection: Component<SidebarSectionProps> = ({ section }) => {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex justify-between">
        <p className="font-medium text-xs tracking-wider uppercase text-white">{section.title}</p>
        <AiOutlineDown className="text-white" />
      </div>

      <ol className="pt-1 grid gap-1">
        {section.links.map((link, index) => (
          <li key={index}>
            <Link className={clsx(
              "flex gap-2 py-2 text-sm text-white-desc hover:text-primary",
              "p-2 rounded hover:bg-background-info hover:text-white transition-colors",
              {
                "bg-background-info": link.href === pathname
              }
            )} href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};