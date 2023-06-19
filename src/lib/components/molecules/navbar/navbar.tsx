"use client";

import type { NavbarProps } from "./navbar.type";
import type { Component } from "#/lib/utils/component";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Hamburger } from "#/lib/components/atoms/hamburger";
import { links } from "#/lib/configs/navbar";
import { BsDiscord } from "react-icons/bs";
import { members } from "#/lib/configs/member";
import { Dropdown, DropdownButton, DropdownLink, DropdownSeparator } from "#/lib/components/atoms/dropdown/profile";
import { useMediaQuery } from "#/lib/hooks/media-query";
import { FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { s, sm } from "#/lib/utils/style/class";

export const Navbar: Component<NavbarProps> = ({ className }) => {
  // Hooks:
  const media = useMediaQuery({ type: "max", width: "1029px" });
  const pathname = usePathname();

  // States:
  const [connected, setConnected] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  // Close mobile navbar on navigation:
  useEffect(() => setIsOpen(false), [pathname]);

  // Styles:
  const baseStyles = sm(
    "bg-background-header backdrop-blur-2xl w-screen",
    className
  );

  // Renders:
  if (media === "loading") return (
    <nav className={s(baseStyles, "h-16 flex items-center")} />
  );

  if (media === "match") return (
    <nav className={baseStyles}>
      <div className="container h-16 flex items-center justify-between">
        <Link href="/">
          <Image src="/images/royaume-logo.png" alt="logo" height={50} width={50} />
        </Link>

        <Hamburger open={isOpen} setOpen={setIsOpen} />
      </div>

      <div className={s(
        "overflow-y-hidden transition-[max-height] duration-500",
        {
          "max-h-0": !isOpen,
          "max-h-96": isOpen
        }
      )}>
        <ul className="container pb-4 grid gap-2">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className={s(
              "text-white py-1 px-2 rounded w-full",
              "transition-colors duration-200",
              {
                "bg-purple": pathname === link.href
              }
            )}>
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );

  return (
    <nav className={s("h-16 flex items-center", baseStyles)}>
      <div className="flex justify-between flex container items-center">
        <Link href="/">
          <Image src="/images/royaume-logo.png" alt="logo" width={50} height={50} />
        </Link>

        <ul className="flex gap-10 items-center">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-white">{link.name}</Link>
          ))}

          {connected ? (
            <Dropdown label={members[0].username} icon={members[0].profilePicture} iconSize={32}>
              <DropdownLink href="https://royaume.world/discord" className="hover:text-discord" target="_blank">
                <BsDiscord /> Rejoindre le discord
              </DropdownLink>

              <DropdownSeparator />

              <DropdownButton className="hover:text-danger" onClick={() => setConnected(false)}>
                <FaSignOutAlt /> Se déconnecter
              </DropdownButton>
            </Dropdown>
          ) : (
            <button className="bg-discord rounded px-4 py-2 flex items-center space-x-2 text-white gap-3" onClick={() => setConnected(true)}>
              <BsDiscord />
              Se connecter
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};