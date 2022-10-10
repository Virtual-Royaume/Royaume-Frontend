<script lang="ts">
  import { onMount } from "svelte";
  import { clsx } from "clsx";
  import { Text } from "../../texts/text";
  import type { AutocompleteInputColor, AutocompleteSize } from "./autocomplete-input.type";

  // Props :
  export let color: AutocompleteInputColor = "primary";
  export let label: string | null = null;
  export let placeholder: string | null;
  export let autofocus = false;
  export let value: string | null = null;
  export let required = false;
  export let size: AutocompleteSize = "normal";
  export let options: string[] = [];
  export let disabled = false;

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
    "px-2 py-4": size === "large"
  });

  let highlightedIndex: number | null = null;
  let filteredOptions: string[] = [];

  const filter = (): void => {
    if (!value) {
      reset();
      filteredOptions = [];
    }
    filteredOptions = options.filter((v) => v.toLowerCase().startsWith(<string>value.toLowerCase()));
  };

  // Keyboard navigation
  const navigate = (e: KeyboardEvent) => {
    if (filteredOptions.length === 0) return;

    if (e.key === "ArrowDown") {
      highlightedIndex === null ? highlightedIndex = 0 : highlightedIndex + 1 === filteredOptions.length ? null : highlightedIndex++;
      scrollIntoView(filteredOptions[highlightedIndex]);
    }

    if (e.key === "ArrowUp" && highlightedIndex) {
      highlightedIndex === 0 ? highlightedIndex = filteredOptions.length - 1 : highlightedIndex--;
      scrollIntoView(filteredOptions[highlightedIndex]);
    }

    if (e.key === "Enter" && highlightedIndex !== null) {
      value = filteredOptions[highlightedIndex];
      reset();
    }
  };

  const click = (index: number) => {
    value = filteredOptions[index];
    reset();
  };

  const reset = () => {
    filteredOptions = [];
    highlightedIndex = null;
  };

  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (!element) return;

    element.scrollIntoView();
  };
</script>

<svelte:window on:keydown={navigate}/>

<div class="relative w-full">
  <label>
    {#if label}
      <div class="mb-1">
        <Text type="p" size="normal" fontWeight="medium">{label}</Text>
      </div>
    {/if}
    <div>
      <input type="text" class={style} bind:this={inputRef} bind:value on:input={filter} {placeholder} {required} {disabled}>
    </div>
  </label>

  {#if filteredOptions.length > 0}
    <ul class="shadow bg-gray-1 border border-gray-2 rounded-md mt-2 max-h-48 overflow-y-auto absolute w-full">
      {#each filteredOptions as option, i}
        <li class={"p-2 hover:bg-primary-1 hover:text-white cursor-pointer group " + (highlightedIndex === i ? "bg-primary-1 text-white" : "")} id={option.toLowerCase()} on:click={() => click(i)}>
          <Text color="inherit">{option}</Text>
        </li>
      {/each}
    </ul>
  {/if}
</div>