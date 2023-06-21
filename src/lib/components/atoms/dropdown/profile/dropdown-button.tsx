import type { Component } from "#/lib/utils/component";
import type { DropdownItemButton } from "./dropdown.type";
import { s } from "#/lib/utils/style/class";

export const DropdownButton: Component<DropdownItemButton> = ({ className, children, ...props }) => {
  return (
    <button
      type="button"
      className={s(
        className,
        "flex items-center gap-2 block w-full px-4 py-2 text-sm text-white-desc rounded",
        "hover:bg-background-card-hover hover:text-gray-900"
      )}
      role="menuitem"
      {...props}
    >
      {children}
    </button>
  );
};