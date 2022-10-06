<script lang="ts">
  import { clsx } from "clsx";
  import { DoneIcon } from "../../../icons";
  import type { CheckboxColor } from "./checkbox.type";
  import { Text } from "../../texts/text";

  // Props :
  export let color: CheckboxColor = "primary";
  export let label: string | null = null;

  let checked: boolean = false;

  // Style :
  $: style = clsx("relative border-2 rounded-md w-5 h-5 peer-focus:ring", {
    // Color
    "border-gray-4": !checked,
    "border-primary-1 bg-primary-1": color === "primary" && checked,
    "border-secondary-1 bg-secondary-1": color === "secondary" && checked,
    "border-success-1 bg-success-1": color === "success" && checked,
    "border-warning-1 bg-warning-1": color === "warning" && checked,
    "border-error-1 bg-error-1": color === "error" && checked,

    "peer-focus:ring-primary-1/50": color === "primary",
    "peer-focus:ring-secondary-1/50": color === "secondary",
    "peer-focus:ring-success-1/50": color === "success",
    "peer-focus:ring-warning-1/50": color === "warning",
    "peer-focus:ring-error-1/50": color === "error"
  });
</script>

<label class="flex items-center">
  <div>
    <input type="checkbox" class="opacity-0 absolute inset-0 sr-only peer" bind:checked={checked}>
    <div class={style}>
      {#if checked}
          <div class="flex items-center justify-center h-full w-full">
            <DoneIcon size={18} color="white" />
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