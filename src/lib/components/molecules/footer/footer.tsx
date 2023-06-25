import type { Component } from "#/lib/utils/component";
import type { ReactElement } from "react";
import type { FooterProps } from "./footer.type";
import { sm } from "#/lib/utils/style/class";

export const Footer: Component<FooterProps> = ({ className }): ReactElement => {
  return (
    <footer className={sm("h-24 bg-gray-900 border-t-4 border-t-primary-500", className)}>

    </footer>
  );
};