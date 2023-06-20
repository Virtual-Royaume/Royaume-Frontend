"use client";

import { s, sm } from "#/lib/utils/style/class";
import type { CheckboxProps } from "./checkbox.type";
import type { KeyboardEvent } from "react";
import { forwardRef, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, checked, ...props }, ref) => {
  const [isChecked, setIsChecked] = useState(checked);

  // Styles :
  const styles = sm(
    "relative rounded w-6 h-6 bg-background-card border-2 border-background-info",
    className
  );

  useEffect(() => setIsChecked(checked), [checked]);

  const handleEnter = (event: KeyboardEvent): void => {
    if (event.key !== "Enter") return;
    setIsChecked((state) => !state);
  };

  return (
    <div className={styles}>
      <input
        ref={ref}
        type="checkbox"
        className="appearance-none w-full h-full rounded cursor-pointer focus:ring-2 focus:ring-purple outline-none"
        checked={isChecked}
        onChange={() => setIsChecked((state) => !state)}
        onKeyDown={handleEnter}
        {...props}  />
      {isChecked && (
        <AiOutlineCheck className={s(
          "absolute left-1/2 right-0 top-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2",
          "w-3 h-3 text-white pointer-events-none"
        )} />
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";