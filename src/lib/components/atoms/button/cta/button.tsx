import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "./button.type";
import { clsx } from "clsx";
import { forwardRef } from "react";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
  const styles = clsx(
    "flex items-center gap-2 bg-discord text-white rounded",
    "py-2 px-6 w-fit"
  );

  return <button ref={ref} className={twMerge(styles, className)} {...props}>{children}</button>;
});

Button.displayName = "Button";