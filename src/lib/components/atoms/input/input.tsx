"use client";

import type { InputProps } from "./input.type";
import { s, sm } from "#/lib/utils/style/class";
import type { ChangeEvent } from "react";
import { cloneElement, forwardRef, useContext, useState } from "react";
import { LabelContext } from "../label/label-provider";

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, icon, disabled, value: valueProps, onChange, ...props }, ref) => {
  const haveError = useContext(LabelContext);
  const [value, setValue] = useState(valueProps);

  const containerStyle = s(
    "flex bg-background-card border-2 rounded focus-within:ring-2 rounded",
    {
      "border-background-info focus-within:ring-purple": !haveError,
      "border-danger focus-within:ring-danger": haveError,

      "brightness-[.7]": disabled
    }
  );

  const inputStyle = sm(
    "outline-none bg-background-card text-white-desc rounded px-3 py-2 w-full",
    className
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <div className={containerStyle}>
      {!!icon && (
        <div className="flex items-center justify-center px-4 bg-background-info">
          {cloneElement(icon, { className: "text-white w-5 h-5" })}
        </div>
      )}
      <input
        aria-required={props.required}
        aria-disabled={disabled}

        ref={ref}
        className={inputStyle}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        {...props} />;
    </div>
  );
});

Input.displayName = "Input";