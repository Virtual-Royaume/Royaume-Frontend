"use client";

import type { Component } from "#/lib/utils/component";
import type { MembersGaleryProps } from "./members-galery.type";
import type { Member } from "#/lib/configs/member/member.type";
import { useEffect, useRef } from "react";
import Image from "next/image";

export const MembersGalery: Component<MembersGaleryProps> = ({ members, orientation }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollIntervalRef = useRef<NodeJS.Timer | null>(null);
  let scrollForward = false;

  const shuffle = (array: Member[]): Member[] => {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (orientation === "right") container.scrollLeft = container.scrollWidth;
    if (orientation === "left") container.scrollLeft = 0;

    const startScrolling = (): void => {
      if (scrollForward) {
        if (orientation === "left") {
          decreaseScroll();
        } else {
          increaseScroll();
        }
      } else {
        if (orientation === "left") {
          increaseScroll();
        } else {
          decreaseScroll();
        }
      }
    };

    const increaseScroll = (): void => {
      container.scrollLeft += 1;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        scrollForward = orientation === "left";
      }
    };

    const decreaseScroll = (): void => {
      container.scrollLeft -= 1;

      if (container.scrollLeft === 0) scrollForward = orientation === "right";
    };

    scrollIntervalRef.current = setInterval(startScrolling, 50);

    return () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    };
  }, []);

  return (
    <div className="flex overflow-x-hidden gap-4 opacity-10" ref={containerRef}>
      {shuffle(members).map((member, i) => (
        <div key={i} className="relative min-w-[3.5rem] min-h-[3.5rem] justify-center gap-1 profile-photo">
          <Image src={member.profilePicture} alt="Member Profile Picture" fill className="rounded-full object-cover rounded-full" />
        </div>
      ))}
    </div>
  );
};