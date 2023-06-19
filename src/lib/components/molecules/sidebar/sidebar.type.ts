import type { Section } from "#/lib/configs/sidebar/sidebar.type";
import type { ComponentPropsWithoutRef } from "react";

export type SidebarProps = ComponentPropsWithoutRef<"nav"> & {
  sections: Section[];
};