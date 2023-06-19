"use client";

import type { SidebarProps } from "./sidebar.type";
import type { Component } from "#/lib/utils/component";
import { Text } from "#/lib/components/atoms/texts";
import Image from "next/image";

export const Sidebar: Component<SidebarProps> = () => {
  return (
    <nav className="fixed flex-col w-64 max-h-max h-full px-4 py-8 bg-background-card">
      <div className="flex items-center mb-8 gap-2 justify-center">
        <Image src="/images/royaume-logo.png" width={32} height={32} alt="Logo" />
        <Text className="uppercase font-bold text-white">Profil</Text>
      </div>
    </nav>
  );
};