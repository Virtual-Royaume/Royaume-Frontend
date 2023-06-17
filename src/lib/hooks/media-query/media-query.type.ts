import type { Pixel } from "#/lib/utils/typing";

export type UseMediaQueryProps = {
  type: "max" | "min";
  width: Pixel;
}

export type UseMediaQueryOutput = "match" | "unmatch" | "loading";

export type UseMediaQueryHook = (query: UseMediaQueryProps) => UseMediaQueryOutput;