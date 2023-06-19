import type { Component } from "#/lib/utils/component";
import clsx from "clsx";
import type { DropdownItemButton } from "./dropdown.type";

export const DropdownButton: Component<DropdownItemButton> = ({ className, children, ...props }) => {
  return (
    <button
      type="button"
      className={clsx(
        className,
        "flex items-center gap-2 block w-full px-4 py-2 text-sm text-white-desc",
        "hover:bg-background-card-hover hover:text-gray-900"
      )}
      role="menuitem"
      {...props}
    >
      {children}
    </button>
  );
};