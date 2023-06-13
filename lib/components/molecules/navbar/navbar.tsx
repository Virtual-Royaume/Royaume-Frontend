"use client";

import type { ReactElement } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useIsDomLoaded } from "@lib/hooks/is-dom-loaded";
import { useMediaQuery } from "usehooks-ts";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Hamburger } from "@lib/components/atomics/hamburger";
import { links } from "@lib/configs/navbar";

export const Navbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(true);
  const isDomLoaded = useIsDomLoaded();
  const matches = useMediaQuery("(max-width: 1029px)");
  const pathname = usePathname();

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

      <div className={clsx(
        "overflow-y-hidden transition-[max-height] duration-500",
        {
          "max-h-0": !isOpen,
          "max-h-96": isOpen
        }
      )}>
        <ul className="container pb-4 grid gap-2">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className={clsx(
              "text-white py-1 px-2 rounded-md w-full",
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
        <ul className="flex gap-10">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-white">{link.name}</Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;