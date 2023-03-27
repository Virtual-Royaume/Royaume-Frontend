<script lang="ts">
  import type { IconColor } from "../icon.type";
  import { colorOptions } from "../icon.util";
  
  // Props:
  export let size: number;
  export let color: IconColor = "white";
</script>

<svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" stroke-width="2" fill="none" stroke={colorOptions[color]} stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M5 12l5 5l10 -10"></path>
</svg>