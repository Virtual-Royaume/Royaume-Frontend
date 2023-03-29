<script lang="ts">
  import { Text } from "$lib/components/atoms/text";
  import { clsx } from "clsx";
  import type { AlertColor } from "./alert.type";
  import { ReportIcon } from "$lib/components/icons";

  // Props :
  export let color: AlertColor = "info";
  export let message: string;

  // Style :
  $: style = clsx("flex items-center gap-2 p-4 shadow rounded-md", {
    // Background Color :
    "bg-primary/75": color === "primary",
    "bg-primary-2/75": color === "primary-2",
    "bg-secondary/75": color === "secondary",
    "bg-secondary-2/75": color === "secondary-2",
    "bg-success/75": color === "success",
    "bg-success-2/75": color === "success-2",
    "bg-warning/75": color === "warning",
    "bg-warning-2/75": color === "warning-2",
    "bg-error/75": color === "danger",
    "bg-error-2/75": color === "danger-2",
    "bg-white/75": color === "white",
    "bg-black/75": color === "black",
    "bg-gray/75": color === "gray",
    "bg-gray-2/75": color === "gray-2",
    "bg-gray-3/75": color === "gray-3",
    "bg-gray-4/75": color === "gray-4",
    "bg-red/75": color === "red",
    "bg-green/75": color === "green",
    "bg-info/75": color === "info",
    "bg-info-2/75": color === "info-2"
  });
</script>

<div class={style}>
  <!-- Icon Alert in white only for gray -> gray 2 and black -->
  {#if color === "gray" || color === "gray-2" || color === "black"}
    <ReportIcon color="black" size={24} />
    <Text color="black">{message}</Text>
  {:else}
    <ReportIcon color="white" size={24} />
    <Text color="white">{message}</Text>
  {/if}
</div>