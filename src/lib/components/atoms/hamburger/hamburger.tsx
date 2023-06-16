import type { Component } from "#/lib/utils/component";
import type { HamburgerProps } from "./hamburger.type";
import { FiMenu, FiX } from "react-icons/fi";
import { clsx } from "clsx";

export const Hamburger: Component<HamburgerProps> = ({ open, setOpen }) => {
  // Styles :
  const styles = "w-10 h-10";
  const iconStyles = clsx(
    "text-white",
    "absolute right-0 top-0 bottom-0 my-auto",
    "transition-opacity duration-300",
    "cursor-pointer",
    styles
  );

  // Render:
  return (
    <button
      className={clsx("relative appearance-none", styles)}
      onClick={() => setOpen((state) => !state)}
      aria-label="hamburger"
    >
      <FiX className={clsx(
        iconStyles,
        {
          "opacity-100": open,
          "opacity-0": !open
        }
      )} />

      <FiMenu className={clsx(
        iconStyles,
        {
          "opacity-0": open,
          "opacity-100": !open
        }
      )} />
    </button>
  );
};