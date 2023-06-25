"use client";

import type { SidebarProps } from "./sidebar.type";
import type { Component } from "#/lib/utils/component";
import { useEffect } from "react";
import { CgLogOut } from "react-icons/cg";
import { SidebarSection } from "./sidebar-section";
import { Hamburger } from "#/lib/components/atoms/hamburger/hamburger";
import { useSidebarToggledStore } from "#/lib/stores/use-sidebar/use-sidebar-toggled.store";
import { s, sm } from "#/lib/utils/style/class";
import { usePathname } from "next/navigation";
import { useIsDomLoaded } from "#/lib/hooks/is-dom-loaded";
import { members } from "#/lib/configs/member";
import { Text } from "#/lib/components/atoms/texts";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "#/lib/hooks/media-query";

export const Sidebar: Component<SidebarProps> = ({ sections, className, ...props }) => {
  const [toggle, close, toggled] = useSidebarToggledStore((state) => [state.toggle, state.close, state.toggled]);
  const matches = useMediaQuery({ type: "max", width: "640px" });
  const isDomLoaded = useIsDomLoaded();
  const pathname = usePathname();

  useEffect(() => close(), [pathname]);

  if (!isDomLoaded) return <div />;

  return (
    <div>
      <div className={s(
        "sm:hidden fixed top-1 left-1 z-50 transition-transform",
        {
          "translate-x-64": toggled && matches
        }
      )}>
        <Hamburger open={toggled} setOpen={toggle} />
      </div>

      <nav
        className={sm(
          "fixed top-0 flex-col w-64 max-h-max h-full px-4 py-8 bg-background-card transition-transform z-40 overflow-y-auto",
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

        <div className="grid gap-6 pb-8">
          {sections.map((section, index) => (
            <SidebarSection section={section} key={index} />
          ))}
        </div>

        <div className="fixed w-64 bottom-0 left-0 p-4 bg-background-card  border-t-2 border-purple">
          <Link
            href={"/members/" + members[4].tag}
            className={s(
              "appearance-none w-full flex items-center p-2 hover:bg-background-info rounded",
              "cursor-pointer gap-2 text-white hover:text-danger transition-colors mb-2"
            )}
          >
            <Image src={members[4].profilePicture} width={24} height={24} alt="Avatar" className="rounded-full" />
            <div className="flex flex-col gap-1">
              <Text className="text-white">{members[4].username}</Text>
            </div>
          </Link>

          <button
            className={s(
              "appearance-none w-full flex items-center p-2 hover:bg-background-info rounded",
              "cursor-pointer gap-2 text-white hover:text-danger transition-colors"
            )}
          >
            <CgLogOut />
            <p className="text-sm">Déconnexion</p>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;