"use client";

import type { Component } from "#/lib/utils/component";
import type { SidebarSectionProps } from "./sidebar-section.type";
import { AiOutlineDown } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { s } from "#/lib/utils/style/class";
import { useSidebarStore } from "#/lib/stores/use-sidebar";
import { useIsDomLoaded } from "#/lib/hooks/is-dom-loaded";
import Link from "next/link";

export const SidebarSection: Component<SidebarSectionProps> = ({ section }) => {
  const [toggle, isOpened] = useSidebarStore((state) => [state.toggle, state.isOpened]);
  const pathname = usePathname();
  const isDomLoaded = useIsDomLoaded();

  if (!isDomLoaded) return <div />;

  return (
    <div>
      <button className="flex justify-between w-full" onClick={() => toggle(section.title)}>
        <p className="font-medium text-xs tracking-wider uppercase text-white">{section.title}</p>
        <AiOutlineDown className={s(
          "text-white w-3 h-3 transition-transform",
          {
            "rotate-180": !isOpened(section.title)
          }
        )} />
      </button>

      <ol className={s(
        "pt-1 grid gap-1 overflow-y-hidden transition-[max-height]",
        {
          "max-h-0": !isOpened(section.title),
          "max-h-96": isOpened(section.title)
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