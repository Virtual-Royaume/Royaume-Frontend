import type { Component } from "#/lib/utils/component";
import type { ContentTableItemProps } from "./content-table.type";
import { clsx } from "clsx";

export const ContentTableItem: Component<ContentTableItemProps> = ({ item, active, handleClick }) => {
  return (
    <button
      aria-label={`${item}-button`}
      aria-current={active ? "true" : undefined}

      onClick={() => handleClick()}
      className={clsx(
        "cursor-pointer hover:text-purple w-fit appearance-none",
        {
          "text-purple": active,
          "text-white-desc": !active
        }
      )}>
      {item}
    </button>
  );
};