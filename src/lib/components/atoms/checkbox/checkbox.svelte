<script lang="ts">
  import { clsx } from "clsx";
  import { CheckIcon } from "$lib/components/icons";
  import type { CheckboxColor } from "./checkbox.type";
  import { Text } from "$lib/components/atoms/text";

  // Props :
  export let color: CheckboxColor = "primary";
  export let label: string | null = null;

  let checked = false;

  // Style :
  $: style = clsx("relative border-2 rounded-md w-5 h-5 peer-focus:ring", {
    // Color
    "border-gray-4": !checked,
    "border-primary bg-primary": color === "primary" && checked,
    "border-secondary bg-secondary": color === "secondary" && checked,
    "border-success bg-success": color === "success" && checked,
    "border-warning bg-warning": color === "warning" && checked,
    "border-error bg-error": color === "error" && checked,

    "peer-focus:ring-primary/50": color === "primary",
    "peer-focus:ring-secondary/50": color === "secondary",
    "peer-focus:ring-success/50": color === "success",
    "peer-focus:ring-warning/50": color === "warning",
    "peer-focus:ring-error/50": color === "error"
  });
</script>

<label class="flex items-center">
  <div>
    <input type="checkbox" class="opacity-0 absolute inset-0 sr-only peer" bind:checked={checked}>
    <div class={style}>
      {#if checked}
          <div class="flex items-center justify-center h-full w-full">
            <CheckIcon size={18} color="white" />
          </div>
        {/if}
    </div>
  </div>
  {#if label}
    <div class="ml-2">
      <Text type="p" size="small">{label}</Text>
    </div>
  {/if}
</label>