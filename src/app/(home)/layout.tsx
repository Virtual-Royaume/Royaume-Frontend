import "#/lib/styles/tailwind.css";
import "#/lib/styles/font.css";

import type { Component } from "#/lib/utils/component";
import type { PropsWithChildren } from "react";
import { Footer } from "#/lib/components/molecules/footer";
import { Navbar } from "#/lib/components/molecules/navbar";

export { metadata } from "#/lib/configs/metadata";

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body className="bg-background overflow-x-hidden scroll-smooth">
        <Navbar className="fixed top-0 right-0 left-0 z-50" />

        <div className="mt-16">
          {children}
          <Footer className="mt-28" />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;