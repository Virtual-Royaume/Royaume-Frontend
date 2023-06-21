import type { Component } from "#/lib/utils/component";
import type { DropdownSeparator as DropdownSeparatorType } from "./dropdown.type";
import { sm } from "#/lib/utils/style/class";

export const DropdownSeparator: Component<DropdownSeparatorType> = ({ className }) => {
  return (
    <div className="mt-2 mb-2">
      <div className="flex justify-center text-white-desc">
        <hr className={sm(
          "w-4/5 border-t-white-desc border-opacity-10",
          className
        )} />
      </div>
    </div>
  );
};