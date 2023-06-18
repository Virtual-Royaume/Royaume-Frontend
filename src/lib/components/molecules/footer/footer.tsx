import type { Component } from "#/lib/utils/component";
import type { ReactElement } from "react";
import type { FooterProps } from "./footer.type";
import { clsx } from "clsx";

export const Footer: Component<FooterProps> = ({ className }): ReactElement => {
  return (
    <footer className={clsx("h-24 bg-background-card border-t-4 border-t-purple", className)}>

    </footer>
  );
};