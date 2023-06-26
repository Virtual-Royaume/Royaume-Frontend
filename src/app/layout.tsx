import "#/lib/styles/tailwind.css";
import "#/lib/styles/font.css";

import type { Component } from "#/lib/utils/component";
import type { PropsWithChildren } from "react";

export { metadata } from "#/lib/configs/metadata";

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body className="bg-gray-950 overflow-x-hidden scroll-smooth">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;