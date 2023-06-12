import "@lib/styles/tailwind.css";
import "@lib/styles/font.css";

import { Component } from "@/lib/utils/component";
import { Footer } from "@lib/components/molecules/footer";
import { Navbar } from "@lib/components/molecules/navbar";
import { PropsWithChildren } from "react";

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body className="bg-background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;