<script lang="ts">
  import type { TextType, TextColor, TextSize, FontWeight } from "./text.type";
  import { clsx } from "clsx";

  export let type: TextType = "p";
  export let size: TextSize = "normal";
  export let color: TextColor = "black";
  export let fontWeight: FontWeight = "normal";

  $: style = clsx({
    // Text color :
    "text-primary": color === "primary",
    "text-black": color === "black",
    "text-white": color === "white",
    "text-gray-4": color === "gray",
    "text-red": color === "red",
    "text-inherit": color === "inherit",

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
    "font-bold": fontWeight === "bold"
  });
</script>

<svelte:element this={type} class={style}>
  <slot />
</svelte:element>