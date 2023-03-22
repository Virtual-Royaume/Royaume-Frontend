<script lang="ts">
  import { onMount } from "svelte";
  import { clsx } from "clsx";
  import { Text } from "$lib/components/atoms/text";
  import type { TextAreaType, TextAreaColor, TextAreaSize } from "./text-area.type";
  
  // Props
  export let color: TextAreaColor = "primary";
  export let label: string | null = null;
  export let placeholder: string | null = null;
  export let type: TextAreaType = "text";
  export let autofocus = false;
  export let required = false;
  export let value: string | null = null;
  export let disabled = false;
  export let size: TextAreaSize = "normal";
  export let autoResize = true;
  export let name: string | null = null;
  export let rows = 1;
  
  // Refs :
  let textAreaRef: HTMLTextAreaElement;
  
  onMount(() => autofocus && textAreaRef.focus());

  const resize = (): void => {
    value = textAreaRef.value;
  };

  $: rows = autoResize ? (value?.match(/\n/g) || []).length + 1 || 1 : rows;
  
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

    // Resize
    "overflow-hidden resize-none": autoResize
  });
</script>

<label>
  {#if label}
    <div class="mb-1">
      <Text type="p" size="normal" fontWeight="medium">{label}</Text>
    </div>
  {/if}
  <textarea bind:this={textAreaRef} on:input={resize} {placeholder} {type} {rows} {required} {disabled} {name} class={style}></textarea>
</label>