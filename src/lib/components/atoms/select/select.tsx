"use client";

import { s, sm } from "#/lib/utils/style/class";
import { LabelContext } from "../label/label-provider";
import type { SelectProps } from "./select.type";
import { forwardRef, useContext, useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { SelectItem } from "./select-item";

export const Select = forwardRef<HTMLDivElement, SelectProps>(({
  items, disabled, placeholder, className, ...props
}, ref) => {
  const haveError = useContext(LabelContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Styles :
  const styles = sm(
    "relative outline-none bg-gray-800 border-2 text-gray-500 rounded w-full",
    "focus:ring-2",
    {
      "border-gray-700 focus:ring-primary-500": !haveError,
      "border-danger-500 focus:ring-danger-500": haveError,

      "brightness-[.7]": disabled
    },
    className
  );

  const handleClick = (): void => {
    if (disabled) return;
    setIsOpen((state) => !state);
  };

  const handleSelect = (index: number): void => {
    setSelectedIndex(index);
    setActiveIndex(null);
    setIsOpen(false);
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
          "text-gray-500 transition-transform", {
            "rotate-180": isOpen
          }
        )} />
      </div>

      <div
        aria-label="select-dropdown"
        aria-expanded={isOpen}

        className={s("overflow-y-auto transition-[max-height]", {
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