import "@/lib/styles/tailwind.css"
import { Component } from "@/lib/utils/component";
import { PropsWithChildren } from "react";

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;