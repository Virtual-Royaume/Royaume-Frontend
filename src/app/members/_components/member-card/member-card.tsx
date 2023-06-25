import type { Component } from "#/lib/utils/component";
import type { MemberCardProps } from "./member-card.type";
import { CiLocationOn } from "react-icons/ci";
import { dayJS } from "#/lib/utils/day-js";
import Image from "next/image";
import Link from "next/link";
import { Card } from "#/lib/components/atoms/card";

export const MemberCard: Component<MemberCardProps> = ({ tag, username, profilePicture, birthday, technologies, location }) => {
  return (
    <Link
      href={`/members/${tag}`}
      role="listitem"
      aria-label={`${username} member`}>
      <Card className="w-full flex gap-3" hoverable>
        <div className="relative h-24 aspect-square flex items-center gap-2">
          <Image src={profilePicture} alt="crown" fill className="rounded" />
        </div>

        <div className="relative w-full">
          <div className="flex items-center gap-2 items-baseline mb-1">
            <p className="text-white text-lg text-ellipsis overflow-hidden whitespace-nowrap max-w-[70%]">{username}</p>

            {birthday && (
              <p className="text-gray-500 text-xs whitespace-nowrap">
                {dayJS().diff(birthday, "year", false)} ans
              </p>
            )}
          </div>

          {location && (
            <div className="text-gray-500 flex items-center gap-1">
              <CiLocationOn />
              <p className="text-sm">{location}</p>
            </div>
          )}

          {technologies.length > 0 && (
            <div className="absolute bottom-0 h-6 w-full rounded flex items-center justify-end gap-2">
              {technologies.map((techno) => (
                <div key={techno.name} className="relative aspect-square h-5">
                  <Image src={`/images/icons/${techno.icon}`} alt={`${techno.name} Icon`} fill className="object-contain" />
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};