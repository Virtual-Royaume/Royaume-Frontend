<script lang="ts">
  import { Text } from "../../texts/text";
  import { clsx } from "clsx";
  import type { AlertType } from "./alert.type";

  // Props :
  export let type: AlertType = "success";
  export let message: string;

  // Style :
  const style = clsx("flex items-center gap-2 p-4 shadow-sm rounded-md bg-success-1/10");
</script>

<div class={style}>
  {#if type === "success"}

  {/if}
  {#if type === "warning"}
    
  {/if}
  {#if type === "error"}
    
  {/if}
  <Text>{message}</Text>
</div>