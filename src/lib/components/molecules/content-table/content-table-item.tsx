import type { Component } from "#/lib/utils/component";
import type { ContentTableItemProps } from "./content-table.type";
import { clsx } from "clsx";

export const ContentTableItem: Component<ContentTableItemProps> = ({ item, active, handleClick }) => {
  return (
    <p
      aria-label={item}
      aria-current={active ? "true" : undefined}

      onClick={() => handleClick()}
      className={clsx(
        "cursor-pointer hover:text-purple w-fit",
        {
          "text-purple": active,
          "text-white-desc": !active
        }
      )}>
      {item}
    </p>
  );
};