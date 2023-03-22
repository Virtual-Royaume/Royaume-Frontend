<script lang="ts">
  import { Text } from "$lib/components/atoms/text";
  import { fly } from "svelte/transition";
  import { notifications } from "./notification.util";
</script>

<div class="fixed top-3 right-7">
  {#each $notifications as message}
    <div class="w-80 my-3" transition:fly={{ x: 200, duration: 500 }}>
      <div class="bg-gray-1 w-full px-3 rounded shadow border border-transparent py-4 flex items-center justify-center gap-4">
        <img 
          src="/icons/alert-circle.svg" 
          alt="exclamation" class="h-6 w-6"
        >

        <Text>{message}</Text>
      </div>
    </div>
  {/each}
</div>