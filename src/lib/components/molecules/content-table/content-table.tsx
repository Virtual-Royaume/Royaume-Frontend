"use client";

import type { Component } from "#/lib/utils/component";
import { useEffect, useRef, useState } from "react";
import type { ContentTableProps } from "./content-table.type";
import clsx from "clsx";
import { findClosestValue } from "#/lib/utils/array";

export const ContentTable: Component<ContentTableProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);
  const itemsContainerRef = useRef<HTMLDivElement | null>(null);
  const linkPointerRef = useRef<HTMLSpanElement | null>(null);

  const handleScrollItem = (index: number, title: string, scroll = true): void => {
    if (!itemsContainerRef.current || !linkPointerRef.current) return;
    setActiveItem(index);

    linkPointerRef.current.style.transform = `translateY(${28 * (index)}px)`;

    if (scroll) scrollToTitle(title);
  };

  const scrollToTitle = (title: string): void => {
    const elements = Array.from(document.querySelectorAll("h1, h2"));
    const match = elements.find((el) => {
      return el.textContent?.toLowerCase().includes(title.toLowerCase());
    });

    if (!match) return;

    match.scrollIntoView({ block: "center" });
  };

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h1, h2"));
    const usedElements = elements.filter((el) => {
      return items.some((itemEl) => itemEl.toLowerCase() === el.textContent?.toLowerCase());
    }) as HTMLElement[];

    const onScroll = (): void => {
      const closestElement = findClosestValue(usedElements, (window.scrollY + 110));
      if (!closestElement) return;

      const index = items.findIndex((item) => item.toLowerCase() === closestElement.textContent?.toLowerCase());
      if (typeof index !== "number") return;

      handleScrollItem(index, items[index], false);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="relative rounded sticky top-20 py-4 pr-4 pl-8 bg-background-card">
      <p className="text-white font-medium text-lg">Table des matières</p>
      <div className="mt-2">
        <span className="absolute bg-purple rounded-full w-1 h-4 mt-1 transition-transform left-4" ref={linkPointerRef} />
        <div className="grid gap-1" ref={itemsContainerRef}>
          {items.map((item, i) => (
            <p key={i} onClick={() => handleScrollItem(i, item)}
              className={clsx(
                "text-white-desc cursor-pointer hover:text-purple w-fit",
                {
                  "text-purple": i === activeItem
                }
              )}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};