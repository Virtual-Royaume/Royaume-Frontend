"use client";

import type { NavbarProps } from "./navbar.type";
import type { Component } from "#/lib/utils/component";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Hamburger } from "#/lib/components/atoms/hamburger";
import { links } from "#/lib/configs/navbar";
import { useMediaQuery } from "#/lib/hooks/media-query";
import { s, sm } from "#/lib/utils/style/class";
import royaumeLogo from "~/images/royaume-logo.png";
import Image from "next/image";
import Link from "next/link";

export const Navbar: Component<NavbarProps> = ({ className }) => {
  // Hooks:
  const media = useMediaQuery({ type: "max", width: "1029px" });
  const pathname = usePathname();

  // States:
  const [isOpen, setIsOpen] = useState(true);

  // Close mobile navbar on navigation:
  useEffect(() => setIsOpen(false), [pathname]);

  // Styles:
  const baseStyles = sm(
    "bg-gray-950/50 backdrop-blur-2xl w-screen",
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
          <Image src={royaumeLogo} alt="logo" height={50} width={50} />
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
              "text-gray-50 py-1 px-2 rounded w-full",
              "transition-colors duration-200",
              {
                "bg-primary-500": pathname === link.href
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

        <ul className="flex gap-10">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-50">{link.name}</Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};