"use client";

import { s, sm } from "#/lib/utils/style/class";
import type { CheckboxProps } from "./checkbox.type";
import type { KeyboardEvent } from "react";
import { forwardRef, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, disabled, checked, ...props }, ref) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  useEffect(() => setIsChecked(checked || false), [checked]);

  // Styles :
  const styles = sm(
    "relative rounded w-6 h-6 bg-gray-800 border-2 border-gray-700",
    {
      "cursor-pointer": !disabled,
      "brightness-[.7]": disabled
    },
    className
  );

  const handleEnter = (event: KeyboardEvent): void => {
    if (event.key !== "Enter" || disabled) return;
    setIsChecked((state) => !state);
  };

  const handleClick = (): void => {
    if (disabled) return;
    setIsChecked((state) => !state);
  };

  return (
    <div
      className={styles}
      onClick={() => handleClick()}
      aria-checked>
      <input
        ref={ref}
        type="checkbox"
        className="appearance-none opacity-0 rounded focus:ring-2 focus:ring-primary-500 outline-none"
        checked={isChecked}
        disabled={disabled}
        onKeyDown={handleEnter}
        {...props}  />
      {isChecked && (
        <AiOutlineCheck className={s(
          "absolute left-1/2 right-0 top-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2",
          "w-3 h-3 text-gray-50 pointer-events-none"
        )} />
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";