import type { Component } from "@lib/utils/component";
import type { StatsCardProps } from "./stats-card.type";

export const StatsCard: Component<StatsCardProps> = ({ title, description }) => {
  return (
    <div className="bg-background-card px-4 py-10 rounded-md flex flex-col items-center gap-1 w-72 border-t-4 border-t-purple">
      <p className="text-white font-bold text-4xl">{title}</p>
      <p className="text-white-desc">{description}</p>
    </div>
  );
};