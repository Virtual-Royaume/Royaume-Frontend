import type { ButtonProps } from "./button.type";
import { forwardRef } from "react";
import { sm } from "#/lib/utils/style/class";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
  const styles = sm(
    "flex items-center gap-2 bg-purple hover:bg-purple-hover transition-colors text-white rounded",
    "py-2 px-6 w-fit",
    className
  );

  return <button ref={ref} className={styles} {...props}>{children}</button>;
});

Button.displayName = "Button";