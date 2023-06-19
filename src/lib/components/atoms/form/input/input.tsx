import type { ReactElement } from "react";
import type { InputProps } from "./input.type";
import type { Component } from "#/lib/utils/component";
import { s } from "#/lib/utils/style/class";

export const Input: Component<InputProps> = ({ disabled, value, ...props }): ReactElement => {
  return (
    <input
      className={s(
        "appearance-none bg-background-info border-background-card border-2 border-background-header text-white-desc rounded px-3 py-2",
        "focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
      )}
      disabled={disabled}
      value={value}
      {...props}
    />
  );
};