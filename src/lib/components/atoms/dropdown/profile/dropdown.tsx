import type { Component } from "#/lib/utils/component";
import { clsx } from "clsx";
import { useState } from "react";
import type { DropdownProps } from "./dropdown.types";

export const Dropdown: Component<DropdownProps> = ({ children, items }) => {
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
        {children}
      </button>

      <div className={dropdownMenuClasses}>
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm text-white-desc hover:bg-background-card-hover hover:text-gray-900"
              role="menuitem"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};