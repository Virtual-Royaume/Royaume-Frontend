"use client";

import type { Component } from "#/lib/utils/component";
import { createContext } from "react";
import type { LabelProviderProps } from "./label-provider.type";

export const LabelContext = createContext<boolean>(false);

export const LabelProvider: Component<LabelProviderProps> = ({ error, children }) => {
  return (
    <LabelContext.Provider value={error}>
      {children}
    </LabelContext.Provider>
  );
};