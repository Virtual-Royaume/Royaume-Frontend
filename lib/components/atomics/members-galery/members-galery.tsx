"use client";

import type { Component } from "@lib/utils/component";
import type { MembersGaleryProps } from "./members-galery.type";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { shuffleArray } from "@lib/utils/array";

export const MembersGalery: Component<MembersGaleryProps> = ({ members, orientation }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollIntervalRef = useRef<NodeJS.Timer | null>(null);
  let scrollForward = false;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (orientation === "right") container.scrollLeft = container.scrollWidth;
    if (orientation === "left") container.scrollLeft = 0;

    const startScrolling = () => {
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

    const increaseScroll = () => {
      container.scrollLeft += 1;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        scrollForward = orientation === "left";
      }
    };

    const decreaseScroll = () => {
      container.scrollLeft -= 1;

      if (container.scrollLeft === 0) scrollForward = orientation === "right";
    };

    scrollIntervalRef.current = setInterval(startScrolling, 50);

    return () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    };
  }, []);

  return (
    <div className={`flex overflow-x-hidden gap-4 opacity-10`} ref={containerRef}>
      {shuffleArray(members).map((member, i) => (
        <div key={i} className="relative min-w-[3.5rem] min-h-[3.5rem] justify-center gap-1 profile-photo">
          <Image src={member.profilePicture} alt="Member Profile Picture" fill className="rounded-full object-cover rounded-full" />
        </div>
      ))}
    </div>
  );
};