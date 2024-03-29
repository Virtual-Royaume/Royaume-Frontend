import type { UseIsomorphicLayoutEffectHook } from "./isomorphic-layout-effect.type";
import { useEffect, useLayoutEffect } from "react";

/**
 * The React documentation says about `useLayoutEffect`:
 * > The signature is identical to useEffect, but it fires synchronously after all DOM mutations.
 *
 * That means this hook is a browser hook. But React code could be generated from the server without the Window API.
 * If you're using NextJS, you'll have this error message:
 * > Warning: `useLayoutEffect` does nothing on the server, because its effect cannot be encoded into the server renderer's output format.
 * > This will lead to a mismatch between the initial, non-hydrated UI and the intended UI.
 * > To avoid this, useLayoutEffect should only be used in components that render exclusively on the client.
 * > See https://reactjs.org/link/uselayouteffect-ssr for common fixes.
 *
 * This hook fixes this problem by switching between `useEffect` and `useLayoutEffect` following the execution environment.
 */
export const useIsomorphicLayoutEffect: UseIsomorphicLayoutEffectHook = typeof window !== "undefined" ? useLayoutEffect : useEffect;