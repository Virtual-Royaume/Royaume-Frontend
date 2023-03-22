<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { clsx } from "clsx";
  import { Text } from "$lib/components/atoms/text";
  import type { InputType, InputColor, InputSize } from "./input.type";
  import type { FormContext } from "../form/form.type";

  // Props :
  export let color: InputColor = "primary";
  export let label: string | null = null;
  export let placeholder: string | null = null;
  export let type: InputType = "text";
  export let autofocus = false;
  export let required = false;
  export let value: string | null = null;
  export let disabled = false;
  export let size: InputSize = "normal";
  export let name: string | null = null;
  export let validators: {(value: string | number | null, required: boolean): string}[] = [];

  // Refs :
  let inputRef: HTMLInputElement;

  onMount(() => {
    inputRef.type = type;
    if (autofocus) inputRef.focus();
  });

  // Style :
  $: style = clsx("shadow outline-none focus:ring bg-gray-1 border rounded-md text-normal w-full", {
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

    "border-error-1": error.length > 0,
    "border-gray-2": error.length === 0
  });

  // Validation :
  let error = "";

  const validate = (): string | null => {
    error = "";
    for (const validator of validators) {
      const res = validator(value, required);
      if (res.length > 0) {
        error = res;
        break;
      }
    }
    return error;
  };

  const context = getContext<FormContext>("validator");
  onMount(() => {
    if (!context) return;
    context.register(validate);
    return () => context.unregister(validate);
});
</script>

<label>
  {#if label}
    <div class={`mb-1 flex justify-between items-center ${error.length > 0 ? "text-error-1" : "text-black"}`}>
      <Text type="p" size="normal" fontWeight="medium" color="inherit">{label}</Text>
      {#if error.length > 0}
        <Text type="p" size="small" fontWeight="medium" color="inherit">{error}</Text>
      {/if}
    </div>
  {/if}
  <input bind:this={inputRef} {placeholder} bind:value {disabled} {name} class={style}>
</label>