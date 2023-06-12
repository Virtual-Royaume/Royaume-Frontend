import { links } from "@lib/configs/navbar/navbar.config";
import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = (): ReactElement => {
  return (
    <nav className="bg-background py-3">
      <div className="flex justify-between flex container items-center">
        <Image src="/images/royaume-logo.png" alt="logo" width={50} height={50} />
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