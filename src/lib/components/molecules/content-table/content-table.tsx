"use client";

import type { Component } from "#/lib/utils/component";
import type { ContentTableProps } from "./content-table.type";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { ContentTableItem } from "./content-table-item";
import { findClosestValue } from "./content-table.util";
import { s } from "#/lib/utils/style/class";

export const ContentTable: Component<ContentTableProps> = ({ items }) => {
  const [isCtOpen, setIsCtOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const itemsContainerRef = useRef<HTMLOListElement | null>(null);
  const linkPointerRef = useRef<HTMLSpanElement | null>(null);

  const handleScrollItem = (index: number, title: string, scroll = true): void => {
    if (!itemsContainerRef.current || !linkPointerRef.current) return;
    setActiveItem(index);

    linkPointerRef.current.style.transform = `translateY(${28 * (index)}px)`;

    if (scroll) scrollToTitle(title);
  };

  const scrollToTitle = (title: string): void => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("h1, h2"));
    const match = elements.find((el) => el.textContent?.toLowerCase().includes(title.toLowerCase()));
    if (!match) return;

    window.scroll(0, match.offsetTop - 100);
  };

  const onScroll = useCallback((elements: HTMLElement[]) => {
    const closestElement = findClosestValue(elements, (window.scrollY + 115));
    if (!closestElement) return activeItem;

    const index = items.findIndex((item) => item.toLowerCase() === closestElement.textContent?.toLowerCase());
    if (typeof index !== "number") return activeItem;

    handleScrollItem(index, items[index], false);

    return index;
  }, [activeItem]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("h1, h2"));
    const usedElements = elements.filter((el) => items.some((itemEl) => itemEl.toLowerCase() === el.textContent?.toLowerCase()));

    window.addEventListener("scroll", () => onScroll(usedElements));

    return () => {
      window.removeEventListener("scroll", () => onScroll(usedElements));
    };
  }, []);

  return (
    <nav
      aria-label="content-table"
      className="relative rounded sticky top-20 py-4 pr-4 pl-8 bg-gray-900">
      <div className="flex items-center justify-between">
        <p className="text-gray-50 font-medium text-lg">Table des matières</p>
        <IoIosArrowUp
          aria-label="toggle-button"
          aria-expanded={isCtOpen ? "true" : "false"}
          className={s(
            "text-gray-50 h-5 w-5 lg:hidden transition-transform", {
              "rotate-180": isCtOpen
            }
          )}
          onClick={() => setIsCtOpen((state) => !state)} />
      </div>
      <div
        aria-label="content-table-items"
        className={s(
          "lg:max-h-96 overflow-hidden transition-[max-height]", {
            "max-h-0": !isCtOpen,
            "max-h-96": isCtOpen
          }
        )}>
        <span className={s(
          "absolute bg-primary-500 rounded-full w-1 h-4 mt-3 transition-transform left-4 lg:opacity-100 transition-opacity", {
            "opacity-0": !isCtOpen,
            "opacity-100": isCtOpen
          }
        )} ref={linkPointerRef} />
        <ol className="grid gap-1 pt-2" ref={itemsContainerRef}>
          {items.map((item, i) => (
            <ContentTableItem
              key={i}
              handleClick={() => handleScrollItem(i, item)}
              item={item}
              active={i === activeItem} />
          ))}
        </ol>
      </div>
    </nav>
  );
};