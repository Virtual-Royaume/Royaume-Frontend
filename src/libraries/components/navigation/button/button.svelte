<script lang="ts">
  import { clsx } from "clsx";

  import type { ButtonVariant, ButtonSize } from "./button.type";

  export let variant: ButtonVariant = "text";

  export let disabled = false;

  export let onClick: (event: MouseEvent) => void = () => null;

  export let href: string | null = null;

  export let size: ButtonSize = "small";

  const className = clsx({
  
  });
</script>

<button>
  <slot />
</button>