<script lang="ts">
  import type { IconColor } from "./icon.type";
  import { colorOptions } from "./icon.util";
  
  // Props:
  export let size: number;
  export let color: IconColor = "white";
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={24} viewBox="0 0 24 24" stroke-width="2" stroke={colorOptions[color]} fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
  <path d="M10 14l10 -10"></path>
  <path d="M15 4l5 0l0 5"></path>
</svg>