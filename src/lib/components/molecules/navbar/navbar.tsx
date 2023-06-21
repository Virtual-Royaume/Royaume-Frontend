"use client";

import type { Component } from "#/lib/utils/component";
import type { ReactElement } from "react";
import type { NavbarProps } from "./navbar.type";
import { useState } from "react";
import { useIsDomLoaded } from "#/lib/hooks/is-dom-loaded";
import { useMediaQuery } from "usehooks-ts";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Hamburger } from "#/lib/components/atoms/hamburger";
import { links } from "#/lib/configs/navbar";
import { BsDiscord, BsGearFill, BsPencilFill } from "react-icons/bs";
import { members } from "#/lib/configs/member/member.config";
import { Dropdown, DropdownButton, DropdownLink, DropdownSeparator } from "#/lib/components/atoms/dropdown/profile";
import { FaPaperPlane, FaSignOutAlt } from "react-icons/fa";
import { s } from "#/lib/utils/style/class";
import Image from "next/image";
import Link from "next/link";

export const Navbar: Component<NavbarProps> = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(true);
  const isDomLoaded = useIsDomLoaded();
  const matches = useMediaQuery("(max-width: 1029px)");
  const pathname = usePathname();

  const [connected, setConnected] = useState(false);

  // Close mobile navbar on navigation
  useEffect(() => setIsOpen(false), [pathname]);

  // Base styles :
  const baseStyles = "fixed top-0 right-0 left-0 z-50 bg-background-header backdrop-blur-2xl h-16 flex items-center";

  if (!isDomLoaded) return (
    <nav className={baseStyles} />
  );

  if (matches) return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background-header backdrop-blur-2xl">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/">
          <Image src="/images/royaume-logo.png" alt="logo" width={50} height={50} />
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
            )}>{link.name}</Link>
          ))}
        </ul>
      </div>
    </nav>
  );

  return (
    <nav className={baseStyles}>
      <div className="flex justify-between flex container items-center">
        <Link href="/">
          <Image src="/images/royaume-logo.png" alt="logo" width={50} height={50} />
        </Link>

        <ul className="flex gap-10 items-center">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-white">{link.name}</Link>
          ))}

          {connected ? (
            <Dropdown label={members[4].username} icon={members[4].profilePicture} iconSize={32}>
              <DropdownLink href="/user/settings" className="hover:text-white">
                <BsGearFill /> Paramètres du compte
              </DropdownLink>
              <DropdownLink href="/user/articles" className="hover:text-white">
                <BsPencilFill /> Écrire un nouvel article
              </DropdownLink>

              {members[4].canBeContacted && (
                <DropdownLink href="/user/settings" className="hover:text-white">
                  <FaPaperPlane /> Messagerie (3 non-lus)
                </DropdownLink>
              )}

              <DropdownSeparator />

              <DropdownLink href="https://royaume.world/discord" className="hover:text-discord" target="_blank">
                <BsDiscord /> Rejoindre le discord
              </DropdownLink>

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

export default Navbar;