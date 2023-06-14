"use client";

import { Member } from "@lib/configs/members/members.type";
import type { Component } from "@lib/utils/component";
import { createContext, type PropsWithChildren } from "react";
import { MemberProviderProps } from "./member-provider.type";

const MemberContext = createContext<Member | null>(null);

export const MemberProvider: Component<MemberProviderProps> = ({ member, children }) => {
  return (
    <MemberContext.Provider value={member}>
      {children}
    </MemberContext.Provider>
  );
};