"use client";

import type { SidebarProps } from "./sidebar.type";
import type { Component } from "#/lib/utils/component";
import React from "react";
import { CgLogOut } from "react-icons/cg";
import { SidebarSection } from "./sidebar-section";
import Image from "next/image";
import clsx from "clsx";
import { Hamburger } from "../../atoms/hamburger";
import { useSidebarToggledStore } from "#/lib/stores/use-sidebar/use-sidebar-toggled.store";
import { useMediaQuery } from "usehooks-ts";
import { s, sm } from "#/lib/utils/style/class";

export const Sidebar: Component<SidebarProps> = ({ sections, className, ...props }) => {
  const { toggle, toggled } = useSidebarToggledStore();
  const matches = useMediaQuery("(max-width: 640px)");

  return (
    <div>
      <div className={s(
        "sm:hidden fixed top-0 left-0 z-50 transition-transform",
        {
          "translate-x-64": toggled && matches,
          "ml-1": !toggled && matches
        }
      )}>
        <Hamburger open={toggled} setOpen={toggle} />
      </div>

      <nav
        className={sm(
          "fixed top-0 flex-col w-64 max-h-max h-full px-4 py-8 bg-background-card transition-transform z-40",
          {
            "-translate-x-96": !toggled  && matches
          },
          className
        )}
        {...props}
      >
        <div className="flex items-center mb-8 gap-2 justify-center">
          <Image
            src="/images/royaume-logo.png"
            className="select-none"
            width={32}
            height={32}
            alt="Logo"
          />
          <p className="uppercase select-none font-bold text-white text-2xl">Profil</p>
        </div>

        <div className="grid gap-6">
          {sections.map((section, index) => (
            <SidebarSection section={section} key={index} />
          ))}
        </div>

        <div
          className={clsx(
            "absolute left-2 right-2 bottom-2 flex items-center p-2 hover:bg-background-info rounded",
            "cursor-pointer gap-2 text-white hover:text-danger transition-colors"
          )}
        >
          <CgLogOut />
          <p className="text-sm">Déconnexion</p>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;