<script lang="ts">
  import { clsx } from "clsx";
  import type { LoadingType } from "./loading.type";

  // Props :
  export let color: LoadingType = "primary";

  // Style :
  const outStyle = clsx("absolute h-14 w-14 border-4 border-t-transparent border-b-transparent animate-spin rounded-full", {
    // Border :
    "border-primary-1": color === "primary",
    "border-secondary-1": color === "secondary",
    "border-success-1": color === "success",
    "border-warning-1": color === "warning",
    "border-error-1": color === "error",
    "border-gray-1": color === "normal"
  });
  const inStyle = clsx("absolute h-9 w-9 border-2 border-primary-1 border-t-transparent border-b-transparent animate-reverse-spin rounded-full", {
    // Border :
    "border-primary-1": color === "primary",
    "border-secondary-1": color === "secondary",
    "border-success-1": color === "success",
    "border-warning-1": color === "warning",
    "border-error-1": color === "error",
    "border-gray-1": color === "normal"
  });
</script>

<div class="flex justify-center items-center">
    <div class="h-12 w-12 relative flex items-center justify-center">
        <div class={outStyle}/>
        <div class={inStyle}/>
    </div>
</div>