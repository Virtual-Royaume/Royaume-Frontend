import type { Component } from "#/lib/utils/component";
import type { DropdownProps } from "./dropdown.type";
import { clsx } from "clsx";
import { useState } from "react";
import Image from "next/image";

export const Dropdown: Component<DropdownProps> = ({ label, icon, iconSize, children }) => {
  const [toggled, setToggled] = useState(false);

  const dropdownButtonClasses = clsx(
    "flex items-center gap-2 bg-background-card text-white rounded",
    "py-2 px-3 w-fit"
  );

  const dropdownMenuClasses = clsx(
    "absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-background-card focus:outline-none z-50",
    {
      hidden: !toggled
    }
  );

  return (
    <div className="relative inline-block text-left">
      <button type="button" className={dropdownButtonClasses}onClick={() => setToggled(!toggled)}>
        {icon && <Image src={icon} alt="icon" width={iconSize ?? 32} height={iconSize} />}
        <span className="text-white-desc">{label}</span>
      </button>

      <div className={dropdownMenuClasses}>
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {children}
        </div>
      </div>
    </div>
  );
};