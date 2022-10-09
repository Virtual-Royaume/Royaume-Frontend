<script lang="ts">
  import { onMount } from "svelte";
  import { clsx } from "clsx";
  import { Text } from "../../texts/text";
  import type { AutocompleteInputColor, AutocompleteSize } from "./autocomplete-input.type";

  // Props :
  export let color: AutocompleteInputColor = "primary";
  export let label: string | null = null;
  export let placeholder: string | null;
  export let autofocus: boolean = false;
  export let required: boolean = false;
  export let size: AutocompleteSize = "normal";
  export let options: string[] = ["RomainSav"];

  // Refs :
  let inputRef: HTMLInputElement;

  onMount(() => autofocus && inputRef.focus());

  // Style :
  $: style = clsx("shadow outline-none focus:ring bg-gray-1 border border-gray-2 rounded-md text-normal w-full", {
    // Size :
    "px-2 py-1": size === "small",
    "p-2": size === "normal",
    "px-2 py-4": size === "large",
  });
</script>

<div class="relative w-full">
  <label>
    {#if label}
      <div class="mb-1">
        <Text type="p" size="normal" fontWeight="medium">{label}</Text>
      </div>
    {/if}
    <div>
      <input type="text" class={style}>
    </div>
  </label>

  <ul class="shadow bg-gray-1 border border-gray-2 rounded-md mt-2 max-h-48 overflow-y-auto absolute w-full">
    {#each options as option}
      <li class="p-2 hover:bg-primary-1 hover:text-white cursor-pointer group">
        <Text color="inherit">{option}</Text>
      </li>
    {/each}
  </ul>
</div>