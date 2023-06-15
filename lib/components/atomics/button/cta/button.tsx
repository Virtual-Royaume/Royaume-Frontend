import { classed } from "@tw-classed/react";
import clsx from "clsx";

const styles = clsx(
  "flex items-center gap-2 bg-discord text-white rounded-md",
  "py-2 px-6 w-fit"
);

export const Button = classed("button", styles);