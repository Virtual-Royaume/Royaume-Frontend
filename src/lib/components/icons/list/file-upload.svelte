<script lang="ts">
  import type { IconColor } from "../icon.type";
  import { colorOptions } from "../icon.util";
  
  // Props:
  export let size: number;
  export let color: IconColor = "white";
</script>

<svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" stroke-width="2" stroke={colorOptions[color]} fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
  <path d="M12 11v6"></path>
  <path d="M9.5 13.5l2.5 -2.5l2.5 2.5"></path>
</svg>