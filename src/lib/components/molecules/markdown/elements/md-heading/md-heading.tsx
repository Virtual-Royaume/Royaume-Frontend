import type { Component } from "#/lib/utils/component";
import type { MDHeadingProps } from "./md-heading.type";
import { sm } from "#/lib/utils/style/class";

export const MDHeading: Component<MDHeadingProps> = ({ text, depth }) => {
  const styles = "relative text-gray-50 font-medium";

  if (depth === 1) {
    return <h2 className={sm(
      styles,
      "text-2xl mt-8 mb-4",
      "after:content-[''] after:w-10 after:h-1 after:rounded after:bg-primary-500 after:absolute after:-bottom-1 after:left-0"
    )}>{text}</h2>;
  }

  if (depth === 2) {
    return <h3 className={sm(styles, "text-xl mt-4 mb-2")}>{text}</h3>;
  }

  return <h4 className={sm(styles, "mt-2")}>{text}</h4>;
};