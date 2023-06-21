import type { Component } from "#/lib/utils/component";
import type { DropdownSeparator as DropdownSeparatorType } from "./dropdown.type";
import { sm } from "#/lib/utils/style/class";

export const DropdownSeparator: Component<DropdownSeparatorType> = ({ className }) => {
  return (
    <div className="my-1">
      <div className="flex justify-center text-white-desc">
        <hr className={sm(
          "w-full border-t-white-desc border-opacity-10",
          className
        )} />
      </div>
    </div>
  );
};