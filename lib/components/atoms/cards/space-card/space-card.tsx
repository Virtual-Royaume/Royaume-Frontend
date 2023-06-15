import type { Component } from "#/lib/utils/component";
import type { SpaceCardProps } from "./space-card.type";
import Image from "next/image";

export const SpaceCard: Component<SpaceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-background-card px-4 py-10 rounded-md flex flex-col items-center w-72 border-t-4 border-t-purple">
      <div className="relative h-16 w-16 mb-10">
        <Image src={`/images/icons/${icon}`} alt={title + " Icon"} fill className="object-contain" />
      </div>
      <p className="text-white text-xl font-medium mb-2">{title}</p>
      <p className="text-white-desc text-center">{description}</p>
    </div>
  );
};