import type { Component } from "@lib/utils/component";
import type { MemberCardProps } from "./member-card.type";
import Image from "next/image";
import { DayJS } from "@lib/utils/day-js";
import { CiLocationOn } from "react-icons/ci";

export const MemberCard: Component<MemberCardProps> = ({ username, profilePicture, birthday }) => {
  return (
    <div className="bg-background-card p-3 rounded-md w-full flex gap-5">
      <div className="relative h-24 aspect-square flex items-center gap-2">
        <Image src={profilePicture} alt="crown" fill className="rounded-md" />
      </div>

      <div className="relative w-full">
        <div className="flex items-center gap-2 items-baseline mb-1">
          <p className="text-white text-lg">{username}</p>

          {birthday && (
            <p className="text-white-desc text-xs">
              {DayJS().diff(birthday, "year", false)} ans
            </p>
          )}
        </div>

        <div className="text-white-desc flex items-center gap-1">
          <CiLocationOn />
          <p className="text-sm">France</p>
        </div>

        <div className="absolute bottom-0 w-full h-6 w-full rounded-md bg-background-info">

        </div>
      </div>
    </div>
  );
};