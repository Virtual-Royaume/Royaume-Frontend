import clsx from "clsx";
import { FiMenu, FiX } from "react-icons/fi";
import { HamburgerProps } from "./hamburger.type";
import { Component } from "@lib/utils/component";

export const Hamburger: Component<HamburgerProps> = ({ open, setOpen }) => {
  // Common styles :
  const styles = clsx(
    "w-10 h-10 text-white",
    "absolute right-0 top-0 bottom-0 my-auto",
    "transition-opacity duration-300",
    "cursor-pointer"
  );

  return (
    <span className="relative">
      <FiX onClick={() => setOpen((state) => !state)} className={clsx(
        styles,
        {
          "opacity-100": open,
          "opacity-0": !open
        }
      )} />
      <FiMenu onClick={() => setOpen((state) => !state)} className={clsx(
        styles,
        {
          "opacity-0": open,
          "opacity-100": !open
        }
      )} />
    </span>
  );
};