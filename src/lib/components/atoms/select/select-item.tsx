"use client";

import type { Component } from "#/lib/utils/component";
import { s } from "#/lib/utils/style/class";
import { useEffect, useRef } from "react";
import type { SelectItemProps } from "./select-item.type";

export const SelectItem: Component<SelectItemProps> = ({ item, active, handleSelect }) => {
  const ref = useRef<HTMLLIElement | null>(null);

  // Scroll in view when is active :
  useEffect(() => {
    if (!ref.current || !active) return;
    ref.current.scrollIntoView({ block: "nearest" });

  }, [active]);

  return (
    <li ref={ref}>
      <button
        aria-label="select-item"
        aria-current={active}

        className={s(
          "w-full text-left py-1 px-2 hover:bg-primary-500", {
            "bg-primary-500": active
          }
        )}
        onClick={() => handleSelect()}>{item}</button>
    </li>
  );
};