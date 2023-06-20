import { s, sm } from "#/lib/utils/style/class";
import type { SwitchProps } from "./switch.type";
import type { KeyboardEvent } from "react";
import { forwardRef, useEffect, useState } from "react";

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ className, disabled, checked, ...props }, ref) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  useEffect(() => setIsChecked(checked || false), [checked]);

  // Styles :
  const styles = sm(
    "relative w-11 h-5",
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
    <div className={styles} onClick={handleClick}>
      <input
        ref={ref}
        type="checkbox"
        className="appearance-none opacity-0 outline-none"
        checked={isChecked}
        disabled={disabled}
        onKeyDown={handleEnter}
        {...props}  />

      <span className={s(
        "absolute top-0 left-0 right-0 bottom-0 transition-all rounded focus:ring-2 focus:ring-purple",
        "before:absolute before:content=[''] before:h-4 before:w-4 before:bg-white before:rounded before:transition-transform",
        "before:top-0.5 before:left-0.5",
        {
          "bg-purple-light": !isChecked,
          "bg-purple": isChecked,

          "before:translate-x-6": isChecked
        }
      )}></span>
    </div>
  );
});

Switch.displayName = "Switch";