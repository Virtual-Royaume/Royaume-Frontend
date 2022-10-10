<script lang="ts">
  import { onMount } from "svelte";
  import { clsx } from "clsx";
  import { Text } from "../../texts/text";
  import type { InputType, InputColor, InputSize } from "./input.type";

  // Props :
  export let color: InputColor = "primary";
  export let label: string | null = null;
  export let placeholder: string | null;
  export let type: InputType = "text";
  export let autofocus: boolean = false;
  export let required: boolean = false;
  export let value: string | null = null;
  export let disabled: boolean = false;
  export let size: InputSize = "normal";

  // Refs :
  let inputRef: HTMLInputElement;

  onMount(() => autofocus && inputRef.focus());

  // Style :
  $: style = clsx("shadow outline-none focus:ring bg-gray-1 border border-gray-2 rounded-md text-normal w-full", {
    // Ring :
    "focus:ring-primary-1/50": color === "primary",
    "focus:ring-secondary-1/50": color === "secondary",
    "focus:ring-success-1/50": color === "success",
    "focus:ring-warning-1/50": color === "warning",
    "focus:ring-error-1/50": color === "error",

    // Size :
    "px-2 py-1": size === "small",
    "p-2": size === "normal",
    "px-2 py-4": size === "large",
  });
</script>

<label>
  {#if label}
    <div class="mb-1">
      <Text type="p" size="normal" fontWeight="medium">{label}</Text>
    </div>
  {/if}
  <input bind:this={inputRef} {placeholder} {type} {required} {value} {disabled} class={style}>
</label>