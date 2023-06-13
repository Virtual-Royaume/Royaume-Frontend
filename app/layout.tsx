import "@lib/styles/tailwind.css";
import "@lib/styles/font.css";

import type { Component } from "@/lib/utils/component";
import type { PropsWithChildren } from "react";
import { Footer } from "@lib/components/molecules/footer";
import { Navbar } from "@lib/components/molecules/navbar";

export { metadata } from "@lib/configs/metadata";

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body className="bg-background overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;