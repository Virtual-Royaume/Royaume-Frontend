import type { Component } from "#/lib/utils/component";
import type { ContentTableItemProps } from "./content-table.type";
import { s } from "#/lib/utils/style/class";

export const ContentTableItem: Component<ContentTableItemProps> = ({ item, active, handleClick }) => {
  return (
    <li>
      <button
        aria-label={`${item}-button`}
        aria-current={active ? "true" : undefined}

        onClick={() => handleClick()}
        className={s(
          "cursor-pointer hover:text-purple w-fit appearance-none",
          {
            "text-purple": active,
            "text-white-desc": !active
          }
        )}>
        {item}
      </button>
    </li>
  );
};