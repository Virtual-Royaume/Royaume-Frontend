"use client";

import { Component } from "@lib/utils/component";
import { MembersGaleryProps } from "./members-galery.type";
import Image from "next/image";

export const MembersGalery: Component<MembersGaleryProps> = ({ members, orientation }) => {

  return (
    <div className="flex overflow-x-hidden gap-4 opacity-10">
      {members.map((member) => (
        <div key={member.profilePicture} className="relative min-w-[3.5rem] min-h-[3.5rem] justify-center gap-1">
          <Image src={member.profilePicture} alt="Member Profile Picture" fill className="rounded-full object-cover rounded-full" />
        </div>
      ))}
    </div>
  );
};