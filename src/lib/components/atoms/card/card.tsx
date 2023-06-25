import type { Component } from "#/lib/utils/component";
import { sm } from "#/lib/utils/style/class";
import type { CardProps } from "./card.type";

export const Card: Component<CardProps> = ({ border, hoverable, className, children, ...props }) => {
  // Styles :
  const styles = sm(
    "bg-background-gray-800 p-3 rounded",
    {
      "border-4 border-primary-500": border === "full",
      "border-l-4 border-primary-500": border === "l",
      "border-r-4 border-primary-500": border === "r",
      "border-t-4 border-t-primary-500": border === "t",
      "border-b-4 border-primary-500": border === "b",
      "border-y-1 border-primary-500": border === "y",
      "border-x-4 border-primary-500": border === "x",

      "hover:bg-background-gray-700 transition-colors duration-200": !!hoverable
    },
    className
  );

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  );
};