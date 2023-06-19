import type { DependencyList, EffectCallback } from "react";

export type UseIsomorphicLayoutEffectHook = (effect: EffectCallback, deps?: DependencyList | undefined) => void;