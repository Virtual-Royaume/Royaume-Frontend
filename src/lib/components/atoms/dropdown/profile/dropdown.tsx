import type { Component } from "#/lib/utils/component";
import type { DropdownProps } from "./dropdown.type";
import { useState } from "react";
import { s } from "#/lib/utils/style/class";
import Image from "next/image";

export const Dropdown: Component<DropdownProps> = ({ label, icon, iconSize, children }) => {
  const [toggled, setToggled] = useState(false);

  const dropdownButtonClasses = s(
    "flex items-center gap-2 text-white hover:bg-background-card transition-colors duration-200",
    "py-2 px-3 w-fit",
    {
      "bg-background-card": toggled
    }
  );

  const dropdownMenuClasses = s(
    "absolute top-14 right-0 mt-2 w-fit rounded-md shadow-lg bg-background-card focus:outline-none rounded",
    {
      hidden: !toggled
    }
  );

  return (
    <div className="relative inline-block text-left">
      <button type="button" className={dropdownButtonClasses} onClick={() => setToggled(!toggled)}>
        {icon && <Image src={icon} alt="icon" className="rounded-full" width={iconSize ?? 32} height={iconSize} />}
        <span className="text-white-desc">{label}</span>
      </button>

      <div className={dropdownMenuClasses}>
        <div className="p-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {children}
        </div>
      </div>
    </div>
  );
};