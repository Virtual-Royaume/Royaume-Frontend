"use client";

import type { SidebarProps } from "./sidebar.type";
import type { Component } from "#/lib/utils/component";
import React, { useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { SidebarSection } from "./sidebar-section";
import Image from "next/image";
import clsx from "clsx";
import { Hamburger } from "../../atoms/hamburger";

export const Sidebar: Component<SidebarProps> = ({ sections, ...props }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className="sm:hidden fixed top-0 left-0 z-50">
        <Hamburger open={isOpen} setOpen={setIsOpen} />
      </div>

      <nav
        {...props}
        className={clsx(
          "fixed flex-col w-64 max-h-max h-full px-4 py-8 bg-background-card transition-transform z-40",
          {
            "-translate-x-96": !isOpen
          }
        )}
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