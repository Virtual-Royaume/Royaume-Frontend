<script lang="ts">
  import { clsx } from "clsx";
  import type { LoadingType } from "./loading.type";

  // Props :
  export let color: LoadingType = "primary";

  // Style :
  $: outStyle = clsx("absolute h-14 w-14 border-4 border-t-transparent border-b-transparent animate-spin rounded-full", {
    // Border :
    "border-primary": color === "primary",
    "border-secondary": color === "secondary",
    "border-success": color === "success",
    "border-warning": color === "warning",
    "border-error": color === "error",
    "border-gray": color === "normal"
  });
  $: inStyle = clsx("absolute h-9 w-9 border-2 border-primary border-t-transparent border-b-transparent animate-reverse-spin rounded-full", {
    // Border :
    "border-primary": color === "primary",
    "border-secondary": color === "secondary",
    "border-success": color === "success",
    "border-warning": color === "warning",
    "border-error": color === "error",
    "border-gray": color === "normal"
  });
</script>

<div class="flex justify-center items-center">
    <div class="h-12 w-12 relative flex items-center justify-center">
        <div class={outStyle}/>
        <div class={inStyle}/>
    </div>
</div>