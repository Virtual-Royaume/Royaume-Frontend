import type { Component } from "#/lib/utils/component";
import { sm } from "#/lib/utils/style/class";
import { LabelProvider } from "./label-provider";
import type { LabelProps } from "./label.type";

export const Label: Component<LabelProps> = ({ className, title, error, required, children, ...props }) => {
  const styles = sm(
    "grid gap-1",
    {
      "border-danger-500": !!error
    },
    className
  );

  return (
    <label className={styles} {...props}>
      <p className="text-white uppercase text-sm font-medium tracking-wide">
        {title}
        {required && <>*</>}
      </p>
      <LabelProvider error={!!error}>
        {children}
      </LabelProvider>
      {!!error && (
        <p className="text-danger-500 text-sm">{error}</p>
      )}
    </label>
  );
};