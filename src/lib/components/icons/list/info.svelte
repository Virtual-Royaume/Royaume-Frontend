<script lang="ts">
  import type { IconColor } from "../icon.type";
  import { colorOptions } from "../icon.util";
  
  // Props:
  export let size: number;
  export let color: IconColor = "white";
</script>

<svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" stroke-width="2" stroke={colorOptions[color]} fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
  <path d="M12 9h.01"></path>
  <path d="M11 12h1v4h1"></path>
</svg>