"use client";

import type { Member } from "#/lib/configs/members/members.type";
import type { MemberProviderProps } from "./member-provider.type";
import { createContext } from "react";
import type { Component } from "#/lib/utils/component";

export const MemberContext = createContext<Member | null>(null);

export const MemberProvider: Component<MemberProviderProps> = ({ member, children }) => {
  return (
    <MemberContext.Provider value={member}>
      {children}
    </MemberContext.Provider>
  );
};