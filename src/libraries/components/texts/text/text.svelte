<script lang="ts">
  import type { Type, Color, Size, FontWeight } from "./text.type";
  import { clsx } from "clsx";

  // Props :
  export let type: Type = "p";
  export let size: Size = "normal";
  export let color: Color = "black";
  export let fontWeight: FontWeight = "normal";

  // Style :
  const style = clsx({
    // Text color :
    "text-primary": color === "primary",
    "text-black": color === "black",
    "text-white": color === "white",
    "text-gray": color === "gray",
    "text-red": color === "red",

    // Font size :
    "text-small": size === "normal",
    "text-normal": size === "normal",
    "text-lg": size === "large",
    "text-xl": size === "xl",
    "text-2xl": size === "2xl",
    "text-3xl": size === "3xl",

    "font-thin": fontWeight === "thin",
    "font-normal": fontWeight === "normal",
    "font-bold": fontWeight === "bold"
  });
</script>

<svelte:element this={type} class={style}>
  <slot />
</svelte:element>