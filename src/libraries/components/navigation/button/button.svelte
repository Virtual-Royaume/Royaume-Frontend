<script lang="ts">
  import { clsx } from "clsx";
  import type { ButtonVariant, ButtonSize, ButtonColor } from "./button.type";

  // Props :
  export let variant: ButtonVariant = "text";
  export let size: ButtonSize = "small";
  export let color: ButtonColor = "primary";
  export let disabled = false;
  export let href: string | null = null;
  export let onClick: (event: MouseEvent) => void = () => null;

  // Style :
  const style = clsx({
    // Contained :
    "bg-primary-1 text-white": color === "primary" && variant === "contained",
    "bg-secondary-1 text-black": color === "secondary" && variant === "contained",
    "bg-error-1": color === "error" && variant === "contained",
    "bg-warning-1": color === "warning" && variant === "contained",
    "bg-success-1": color === "success" && variant === "contained",

    "hover:bg-primary-2 hover:border-primary-2":  color === "primary" && variant === "contained" && !disabled,
    "hover:bg-secondary-2 hover:border-secondary-2":  color === "secondary" && variant === "contained" && !disabled,
    "hover:bg-error-2 hover:border-error-2":  color === "error" && variant === "contained" && !disabled,
    "hover:bg-warning-2 hover:border-warning-2":  color === "warning" && variant === "contained" && !disabled,
    "hover:bg-success-2 hover:border-success-2":  color === "success" && variant === "contained" && !disabled,

    // Outlined & Text :
    "text-primary-1 hover:bg-primary-1/10": (variant === "outlined" || variant === "text") && color === "primary" && !disabled,
    "text-secondary-1 hover:bg-secondary-1/10": (variant === "outlined" || variant === "text") && color === "secondary" && !disabled,
    "text-error-1 hover:bg-error-1/10": (variant === "outlined" || variant === "text") && color === "error" && !disabled,
    "text-warning-1 hover:bg-warning-1/10": (variant === "outlined" || variant === "text") && color === "warning" && !disabled,
    "text-success-1 hover:bg-success-1/10": (variant === "outlined" || variant === "text") && color === "success" && !disabled,

    // Outlined & Contained :
    "border-primary-1": (variant === "outlined" || variant === "contained") && color === "primary" && !disabled,
    "border-secondary-1": (variant === "outlined" || variant === "contained") && color === "secondary" && !disabled,
    "border-error-1": (variant === "outlined" || variant === "contained") && color === "error" && !disabled,
    "border-warning-1": (variant === "outlined" || variant === "contained") && color === "warning" && !disabled,
    "border-success-1": (variant === "outlined" || variant === "contained") && color === "success" && !disabled,

    // Disable :
    "cursor-normal opacity-50": disabled,

    // Text :
    "border-transparent": variant === "text",

    // Size :
    "py-1 px-2": size === "small",
    "py-1 px-6": size === "medium",
    "py-1 px-9": size === "large",
    "py-1 w-full": size === "full"
  });

  const defaultStyle = "rounded-md select-none table-cell border-2 uppercase font-medium tracking-wider transition-colors duration-200";
</script>

{#if href}
<a href={href} class="no-underline">
  <button class={defaultStyle + " " + style} disabled={disabled}>
    <slot />
  </button>
</a>
{:else}
<button class={defaultStyle + " " + style} disabled={disabled} on:click={onClick}>
  <slot />
</button>
{/if}

