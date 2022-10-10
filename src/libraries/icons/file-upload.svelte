<script lang="ts">
  import type { IconColor } from "./icon.type";
  import { colorOptions } from "./icon.util";
  
  // Props :
  export let size: number;
  export let color: IconColor = "white";
  export let fill = false;
</script>


{#if fill}
<svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill={colorOptions[color]}>
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill={colorOptions[color]}>
  <path d="M0 0h24v24H0V0z" fill="none"/>
  <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z"/></svg>
{/if}