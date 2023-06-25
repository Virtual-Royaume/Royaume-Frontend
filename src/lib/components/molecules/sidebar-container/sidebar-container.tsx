"use client";

import type { Component } from "#/lib/utils/component";
import type { PropsWithChildren } from "react";
import { useSidebarToggledStore } from "#/lib/stores/use-sidebar/use-sidebar-toggled.store";
import { s } from "#/lib/utils/style/class";
import { useMediaQuery } from "#/lib/hooks/media-query";

export const SidebarContainer: Component<PropsWithChildren> = ({ children }) => {
  const { toggled } = useSidebarToggledStore();
  const matches = useMediaQuery({ type: "max", width: "640px" });

  return (
    <div className={s(
      "sm:ml-32 relative transition-all transition-duration-300 ease-in-out mt-16",
      {
        "blur-sm pointer-events-none select-none": toggled && matches
      }
    )}>
      {children}
    </div>
  );
};