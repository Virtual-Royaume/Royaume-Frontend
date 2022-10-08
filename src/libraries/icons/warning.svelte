<script lang="ts">
  import type { IconColor } from "./icon.type";
  import { colorOptions } from "./icon.util";
  
  // Props :
  export let size: number;
  export let color: IconColor = "white";
</script>

<svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill={colorOptions[color]}>
    <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
</svg>