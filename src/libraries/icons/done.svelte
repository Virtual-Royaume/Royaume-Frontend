<script lang="ts">
  import type { IconColor } from "./icon.type";
  import { colorOptions } from "./icon.util";

  // Props :
  export let size: number;
  export let color: IconColor = "white";
</script>

<svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill={colorOptions[color]}>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
</svg>