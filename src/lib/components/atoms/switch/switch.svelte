<script lang="ts">
  import { clsx } from "clsx";
  import type { SwitchColor } from "./switch.type";
  import { Text } from "$lib/components/atoms/text";

  // Props :
  export let color: SwitchColor = "primary";
  export let label: string | null = null;

  let checked = false;

  // Style :
  $: style = clsx("shadow w-11 h-6 rounded-full peer-focus:ring after:content-[''] after:absolute"
    + "after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all", {
    // Color :
    "bg-gray-2": !checked,
    "bg-primary": color === "primary" && checked,
    "bg-secondary": color === "secondary" && checked,
    "bg-success": color === "success" && checked,
    "bg-warning": color === "warning" && checked,
    "bg-error": color === "error" && checked,

    "peer-focus:ring-primary/50": color === "primary",
    "peer-focus:ring-secondary/50": color === "secondary",
    "peer-focus:ring-success/50": color === "success",
    "peer-focus:ring-warning/50": color === "warning",
    "peer-focus:ring-error/50": color === "error",

    // Position :
    "after:translate-x-full after:border-white": checked
  });
</script>

<label class="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" bind:checked={checked}>
  <div class={style}></div>

  {#if label}
    <div class="ml-2">
        <Text type="p" size="small">{label}</Text>
    </div>
  {/if}
</label>