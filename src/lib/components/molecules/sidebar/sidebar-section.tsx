"use client";

import type { Component } from "#/lib/utils/component";
import type { SidebarSectionProps } from "./sidebar-section.type";
import { AiOutlineDown } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { s } from "#/lib/utils/style/class";
import Link from "next/link";

export const SidebarSection: Component<SidebarSectionProps> = ({ section }) => {
  const [isOpened, setIsOpened] = useState(true);
  const pathname = usePathname();

  return (
    <div>
      <button className="flex justify-between w-full" onClick={() => setIsOpened((state) => !state)}>
        <p className="font-medium text-xs tracking-wider uppercase text-white">{section.title}</p>
        <AiOutlineDown className={s(
          "text-white w-3 h-3 transition-transform",
          {
            "rotate-180": !isOpened
          }
        )} />
      </button>

      <ol className={s(
        "pt-1 grid gap-1 overflow-y-hidden transition-[max-height]",
        {
          "max-h-0": !isOpened,
          "max-h-96": isOpened
        }
      )}>
        {section.links.map((link, index) => (
          <li key={index}>
            <Link className={s(
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