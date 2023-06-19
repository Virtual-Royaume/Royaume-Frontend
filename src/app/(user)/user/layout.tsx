import "#/lib/styles/tailwind.css";
import "#/lib/styles/font.css";

import type { Component } from "#/lib/utils/component";
import type { PropsWithChildren } from "react";
import { Sidebar } from "#/lib/components/molecules/sidebar";

export { metadata } from "#/lib/configs/metadata";

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Sidebar className="fixed top-0 left-0 z-50" />
      {children}
    </div>
  );
};

export default RootLayout;