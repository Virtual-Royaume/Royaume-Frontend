<script lang="ts">
  import { clsx } from "clsx";
  import type { ButtonVariant, ButtonSize, ButtonColor } from "./button.type";

  // Props :
  export let variant: ButtonVariant = "contained";
  export let size: ButtonSize = "small";
  export let color: ButtonColor = "normal";
  export let disabled = false;
  export let href: string | null = null;
  export let onClick: (event: MouseEvent) => void = () => null;

  // Style :
  $: style = clsx("focus:ring rounded-md select-none table-cell border-2 transition-colors duration-200 text-normal outline-none", {
    // Contained :
    "bg-primary text-white": color === "primary" && variant === "contained",
    "bg-secondary text-black": color === "secondary" && variant === "contained",
    "bg-error": color === "error" && variant === "contained",
    "bg-warning": color === "warning" && variant === "contained",
    "bg-success": color === "success" && variant === "contained",
    "bg-gray": color === "normal" && variant === "contained",

    "hover:bg-primary-2 hover:border-primary-2": color === "primary" && variant === "contained" && !disabled,
    "hover:bg-secondary-2 hover:border-secondary-2": color === "secondary" && variant === "contained" && !disabled,
    "hover:bg-error-2 hover:border-error-2": color === "error" && variant === "contained" && !disabled,
    "hover:bg-warning-2 hover:border-warning-2": color === "warning" && variant === "contained" && !disabled,
    "hover:bg-success-2 hover:border-success-2": color === "success" && variant === "contained" && !disabled,
    "hover:bg-gray-2 hover:border-gray-2": color === "normal" && variant === "contained" && !disabled,

    // Outlined & Text :
    "text-primary hover:bg-primary/10": (variant === "outlined" || variant === "text") && color === "primary" && !disabled,
    "text-secondary hover:bg-secondary/10": (variant === "outlined" || variant === "text") && color === "secondary" && !disabled,
    "text-error hover:bg-error/10": (variant === "outlined" || variant === "text") && color === "error" && !disabled,
    "text-warning hover:bg-warning/10": (variant === "outlined" || variant === "text") && color === "warning" && !disabled,
    "text-success hover:bg-success/10": (variant === "outlined" || variant === "text") && color === "success" && !disabled,

    // Outlined & Contained :
    "border-primary": (variant === "outlined" || variant === "contained") && color === "primary" && !disabled,
    "border-secondary": (variant === "outlined" || variant === "contained") && color === "secondary" && !disabled,
    "border-error": (variant === "outlined" || variant === "contained") && color === "error" && !disabled,
    "border-warning": (variant === "outlined" || variant === "contained") && color === "warning" && !disabled,
    "border-success": (variant === "outlined" || variant === "contained") && color === "success" && !disabled,
    "border-gray-2": (variant === "outlined" || variant === "contained") && color === "normal" && !disabled,

    // Disable :
    "cursor-normal opacity-50": disabled,

    // Text :
    "border-transparent": variant === "text",

    // Size :
    "p-3": size === "small",
    "py-3 px-6": size === "medium",
    "py-3 px-9": size === "large",
    "py-3 w-full": size === "full",

    // Ring :
    "focus:ring-primary/50": color === "primary",
    "focus:ring-secondary/50": color === "secondary",
    "focus:ring-success/50": color === "success",
    "focus:ring-warning/50": color === "warning",
    "focus:ring-error/50": color === "error"
  });

</script>

{#if href}
  <a href={href} class="no-underline">
    <button class={style} disabled={disabled}>
      <slot />
    </button>
  </a>
{:else}
  <button class={style} disabled={disabled} type="button" on:click={onClick}>
    <slot />
  </button>
{/if}

