import type { Component } from "#/lib/utils/component";
import { sm } from "#/lib/utils/style/class";
import type { CardProps } from "./card.type";

export const Card: Component<CardProps> = ({ border, hoverable, className, children, ...props }) => {
  // Styles :
  const styles = sm(
    "bg-background-card p-3 rounded",
    {
      "border-4 border-purple": border === "full",
      "border-l-4 border-purple": border === "l",
      "border-r-4 border-purple": border === "r",
      "border-t-4 border-t-purple": border === "t",
      "border-b-4 border-purple": border === "b",
      "border-y-1 border-purple": border === "y",
      "border-x-4 border-purple": border === "x",

      "hover:bg-background-card-hover transition-colors duration-200": !!hoverable
    },
    className
  );

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  );
};