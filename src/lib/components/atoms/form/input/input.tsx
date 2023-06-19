"use client";

import type { InputProps } from "./input.type";
import { sm } from "#/lib/utils/style/class";
import { forwardRef, useContext } from "react";
import { LabelContext } from "../label/label-provider";

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ref, ...props }) => {
  const haveError = useContext(LabelContext);

  const styles = sm(
    "outline-none bg-background-card border-2 text-white-desc rounded px-3 py-2 w-full",
    "focus:ring-2",
    {
      "border-background-info focus:ring-purple": !haveError,
      "border-danger focus:ring-danger": haveError
    },
    className
  );

  return <input className={styles} ref={ref} {...props} />;
});

Input.displayName = "Input";