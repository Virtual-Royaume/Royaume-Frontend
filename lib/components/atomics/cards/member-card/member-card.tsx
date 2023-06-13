import type { Component } from "@lib/utils/component";
import type { MemberCardProps } from "./member-card.type";
import Image from "next/image";
import { DayJS } from "@lib/utils/day-js";

export const MemberCard: Component<MemberCardProps> = ({ username, profilePicture, birthday }) => {
  return (
    <div className="bg-background-card p-3 rounded-md flex gap-5 items-center w-full">
      <div className="flex items-center gap-2">
        <Image src={profilePicture} alt="crown" width={60} height={60} className="rounded-md" />
      </div>

      <div className="flex items-center gap-1 items-baseline">
        <p className="text-white text-lg">{username}</p>

        {birthday && (
            <p className="text-white-desc text-xs">
              {DayJS().diff(birthday, "year", false)} ans
            </p>
          )}
      </div>
    </div>
  );
};