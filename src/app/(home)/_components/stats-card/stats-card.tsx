import { Card } from "#/lib/components/atoms/card";
import type { Component } from "#/lib/utils/component";
import type { StatsCardProps } from "./stats-card.type";

export const StatsCard: Component<StatsCardProps> = ({ title, description }) => {
  return (
    <Card border="t" className="w-72 py-10 flex flex-col items-center">
      <p className="text-gray-50 font-bold text-4xl">{title}</p>
      <p className="text-gray-500">{description}</p>
    </Card>

  );
};