"use client";

import type { InputProps } from "./input.type";
import { s, sm } from "#/lib/utils/style/class";
import { forwardRef, useContext, useState } from "react";
import { LabelContext } from "../label/label-provider";
import { IoIosContact } from "react-icons/io";

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, icon, disabled, value: valueProps, ...props }, ref) => {
  const haveError = useContext(LabelContext);
  const [value, setValue] = useState(valueProps);

  const containerStyle = s(
    "flex bg-background-card border-2 rounded focus-within:ring-2 rounded",
    {
      "border-background-info focus:ring-purple": !haveError,
      "border-danger focus:ring-danger": haveError,

      "brightness-[.7]": disabled
    }
  );

  const inputStyle = sm(
    "outline-none bg-background-card text-white-desc rounded px-3 py-2 w-full",
    className
  );

  return (
    <div className={containerStyle}>
      {!!icon && (
        <div className="flex items-center justify-center px-4 bg-background-info">
          {icon}
        </div>
      )}
      <input
        aria-required={props.required}
        aria-disabled={disabled}

        ref={ref}
        className={inputStyle}
        disabled={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props} />;
    </div>
  );
});

Input.displayName = "Input";