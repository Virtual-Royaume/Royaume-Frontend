<script lang="ts">
  import { clsx } from "clsx";
  import type { TextType, TextColor, TextSize, FontWeight } from "./text.type";
  import type { Range } from "../../../utils/types";

  // Props :
  export let type: TextType = "p";
  export let size: TextSize = "normal";
  export let color: TextColor = "black";
  export let fontWeight: FontWeight = "normal";
  export let lineClamp: Range<1, 6> | null = null;

  // Style :
  const style = clsx({
    // Text color :
    "text-primary-1": color === "primary",
    "text-black": color === "black",
    "text-white": color === "white",
    "text-gray-4": color === "gray",
    "text-red-1": color === "red",

    // Font size :
    "text-small": size === "small",
    "text-normal": size === "normal",
    "text-large": size === "large",
    "text-xl": size === "xl",
    "text-2xl": size === "2xl",
    "text-3xl": size === "3xl",

    "font-thin": fontWeight === "thin",
    "font-light": fontWeight === "light",
    "font-normal": fontWeight === "normal",
    "font-medium": fontWeight === "medium",
    "font-bold": fontWeight === "bold",

    "line-clamp-1": lineClamp === 1,
    "line-clamp-2": lineClamp === 2,
    "line-clamp-3": lineClamp === 3,
    "line-clamp-4": lineClamp === 4,
    "line-clamp-5": lineClamp === 5,
  });
</script>

<svelte:element this={type} class={style}>
  <slot />
</svelte:element>