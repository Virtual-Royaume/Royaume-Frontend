<script lang="ts">
  import type { IconColor } from "../icon.type";
  import { colorOptions } from "../icon.util";
  
  // Props:
  export let size: number;
  export let color: IconColor = "white";
  export let fill = false;
</script>

<svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" stroke-width="2" stroke={colorOptions[color]} fill="none" stroke-linecap="round" stroke-linejoin="round">
  {#if !fill}
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
    <path d="M12 8v4"></path>
    <path d="M12 16h.01"></path>
  {:else}
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.99 11.66l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" stroke-width="0" fill="currentColor"></path>
  {/if}
</svg>