import { Card } from "#/lib/components/atoms/card";
import type { Component } from "#/lib/utils/component";
import type { TechnoProps } from "./techno-card.type";
import Image from "next/image";

export const TechnoCard: Component<TechnoProps> = ({ title, description, icon }) => {
  return (
    <Card border="t" className="py-10 flex flex-col items-center w-72">
      <div className="relative h-16 w-16 mb-10">
        <Image src={`/images/icons/${icon}`} alt={title + " Icon"} fill className="object-contain" />
      </div>

      <p className="text-gray-50 text-xl font-medium mb-2">{title}</p>
      <p className="text-gray-500 text-center">{description}</p>
    </Card>
  );
};