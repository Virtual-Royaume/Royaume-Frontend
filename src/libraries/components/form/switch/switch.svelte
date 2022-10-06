<script lang="ts">
  import { clsx } from "clsx";
  import type { SwitchColor } from "./switch.type";
  import { Text } from "../../texts/text";

  // Props :
  export let color: SwitchColor = "primary";
  export let label: string | null = null;

  let checked: boolean = false;

  // Style :
  $: style = clsx("shadow w-11 h-6 rounded-full peer-focus:ring after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all", {
    // Color :
    "bg-gray-2": !checked,
    "bg-primary-1": color === "primary" && checked,
    "bg-secondary-1": color === "secondary" && checked,
    "bg-success-1": color === "success" && checked,
    "bg-warning-1": color === "warning" && checked,
    "bg-error-1": color === "error" && checked,

    "peer-focus:ring-primary-1/50": color === "primary",
    "peer-focus:ring-secondary-1/50": color === "secondary",
    "peer-focus:ring-success-1/50": color === "success",
    "peer-focus:ring-warning-1/50": color === "warning",
    "peer-focus:ring-error-1/50": color === "error",

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