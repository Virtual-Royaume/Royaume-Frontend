import type { ReactElement } from "react";
import type { LabelProps } from "./label.type";
import type { Component } from "#/lib/utils/component";
import { sm } from "#/lib/utils/style/class";

export const Label: Component<LabelProps> = ({ children, className, ...props }): ReactElement => {
  return (
    <label className={sm(
      "grid gap-1 text-white text-sm font-medium uppercase",
      className
    )} {...props}>
      {children}
    </label>
  );
};