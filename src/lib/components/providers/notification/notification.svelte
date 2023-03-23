<script lang="ts">
  import { Text } from "$lib/components/atoms/text";
  import { CheckIcon, InfoIcon, WarningIcon } from "$lib/components/icons";
  import { fly } from "svelte/transition";
  import { notifications } from "./notification.util";
  import clsx from "clsx";
</script>

<div class="fixed top-3 right-7">
  {#each $notifications as { id, message, type }}
    <div class="w-80 my-3" transition:fly={{ x: 200, duration: 500 }}>
      <div class="w-full px-3 rounded shadow border border-transparent py-4 flex items-center justify-center gap-4 bg-gradient-to-tr {clsx({
        "from-success to-success-2": type === "success",
        "from-error to-error-2": type === "error",
        "from-info to-info-2": type === "info",
      })}">
        {#if type === "error"}
          <WarningIcon color="black" size={24} />
        {:else if type === "success"}
          <CheckIcon color="black" size={24} />
        {:else}
          <InfoIcon color="black" size={24} />
        {/if}

        <Text>{message}</Text>
      </div>
    </div>
  {/each}
</div>