"use client";

import { s, sm } from "#/lib/utils/style/class";
import { LabelContext } from "../label/label-provider";
import type { SelectProps } from "./select.type";
import { forwardRef, useContext, useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { SelectItem } from "./select-item";
import { useController } from "react-hook-form";

export const Select = forwardRef<HTMLDivElement, SelectProps>(({ items, disabled, name, required, placeholder, className, ...props }, ref) => {
  const haveError = useContext(LabelContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Handle ReactHookForm validation :
  const { field } = useController({ name, rules: { required: !!required } });

  // Styles :
  const styles = sm(
    "relative outline-none bg-background-card border-2 text-white-desc rounded w-full",
    "focus:ring-2",
    {
      "border-background-info focus:ring-purple": !haveError,
      "border-danger focus:ring-danger": haveError,

      "brightness-[.7]": disabled
    },
    className
  );

  const handleClick = (): void => {
    if (disabled) return;
    setIsOpen((state) => !state);
    field.onBlur();
  };

  const handleSelect = (index: number): void => {
    setSelectedIndex(index);
    setActiveIndex(null);
    setIsOpen(false);
    field.onChange(items[index]);
  };

  // Handle arrow navigation :
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (!isOpen) return;

      if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) event.preventDefault();

      if (event.key === "ArrowUp") {
        setActiveIndex((state) => {
          if (typeof state !== "number") return 0;
          return state > 0 ? state - 1 : items.length - 1;
        });
      }

      if (event.key === "ArrowDown") {
        setActiveIndex((state) => {
          if (typeof state !== "number") return 0;
          return state < items.length - 1 ? state + 1 : 0;
        });
      }

      if (event.key === "Enter") {
        if (typeof activeIndex !== "number") return;
        handleSelect(activeIndex);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeIndex]);

  return (
    <div ref={ref} className={styles} {...props}>
      <div onClick={() => handleClick()} className={s(
        "flex items-center justify-between px-3 py-2 ", {
          "cursor-pointer": !disabled
        }
      )}>
        {typeof selectedIndex === "number" && items[selectedIndex] && (
          <p>{items[selectedIndex]}</p>
        ) || (
          <p>{placeholder ?? "-"}</p>
        )}
        <IoIosArrowUp className={s(
          "text-white-desc transition-transform", {
            "rotate-180": isOpen
          }
        )} />
      </div>

      <div className={s("overflow-y-auto transition-[max-height]", {
        "max-h-0": !isOpen,
        "max-h-48": isOpen
      })}>
        <ul className="pt-2 overflow-y-auto">
          {items.map((item, index) => (
            <SelectItem
              key={index}
              item={item}
              active={selectedIndex === index || activeIndex === index}
              handleSelect={() => handleSelect(index)} />
          ))}
        </ul>
      </div>
    </div>
  );
});

Select.displayName = "Input";