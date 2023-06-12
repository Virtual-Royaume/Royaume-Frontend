import "@/lib/styles/tailwind.css"
import { Component } from "@/lib/utils/component";
import { Navbar } from "@lib/components/molecules/navbar";
import { PropsWithChildren } from "react";

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout;