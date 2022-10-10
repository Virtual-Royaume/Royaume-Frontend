<script lang="ts">
  import { Text } from "../../texts/text";
  import type { SelectOption, SelectColor, SelectSize } from "./select.type";
  import { UnfoldIcon, DoneIcon } from "../../../icons";

  // Props :
  export let label: string | null = null;
  export let color: SelectColor = "primary";
  export let required = false;
  export let value: string | null = null;
  export let disabled = false;
  export let size: SelectSize = "normal";
  export let options: SelectOption[] = [];

  let selectedIndex: number | null = 0;

  $: selectedOption = typeof selectedIndex === "number" ? options.at(selectedIndex) : null;

  let opened = true;
  const toggle = () => opened = !opened;
</script>

<div class="w-full relative">
  <div>
    {#if label}
      <div>
        <Text>{label}</Text>
      </div>
    {/if}

    <button {disabled} class="shadow focus:ring rounded-md select-none table-cell transition-colors duration-200 text-normal outline-none p-2 border border-gray-2 bg-gray-1 w-full" on:click={toggle}>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          {#if selectedOption}
            {#if selectedOption.img}
              <img src={selectedOption.img} alt={selectedOption.value + " Preview"} class="h-6 w-6 rounded-full"/>
            {/if}
            <Text>{selectedOption.value}</Text>
          {:else}
            <Text>Selectionner une option</Text>
          {/if}
        </div>
        <div>
          <UnfoldIcon color="black" size={15}/>
        </div>
      </div>
    </button>
  </div>

  <ul class="shadow bg-gray-1 border border-gray-2 rounded-md mt-2 max-h-48 overflow-y-auto absolute w-full" class:hidden={!opened}>
    {#each options as option, i}
      <li class="p-2 hover:bg-primary-1 cursor-pointer group" on:click={() => selectedIndex = i}>
        <div class="flex items-center justify-between text-black group-hover:text-white">
            <div class="flex items-center gap-1">
              {#if option.img}
                <img src={option.img} alt={option.value + " Preview"} class="h-6 w-6 rounded-full"/>
              {/if}
              <Text color="inherit">{option.value}</Text>
            </div>
            <div>
              {#if selectedIndex === i}
                <DoneIcon color="inherit" size={15}/>
              {/if}
            </div>
          </div>
      </li>
    {/each}
  </ul>
</div>