"use client";

import type { Member } from "#/lib/configs/member/member.type";
import type { MemberProviderProps } from "./member-provider.type";
import type { Component } from "#/lib/utils/component";
import { createContext } from "react";

export const MemberContext = createContext<Member | null>(null);

export const MemberProvider: Component<MemberProviderProps> = ({ member, children }) => {
  return (
    <MemberContext.Provider value={member}>
      {children}
    </MemberContext.Provider>
  );
};