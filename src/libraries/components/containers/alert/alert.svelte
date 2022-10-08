<script lang="ts">
  import { Text } from "../../texts/text";
  import { clsx } from "clsx";
  import type { AlertType } from "./alert.type";
  import { InfoIcon, CheckIcon, WarningIcon, ReportIcon } from "../../../icons";

  // Props :
  export let type: AlertType = "info";
  export let message: string;

  // Style :
  const style = clsx("flex items-center gap-2 p-4 shadow rounded-md", {
    // Background Color :
    "bg-primary-1/20": type === "info",
    "bg-success-1/20": type === "success",
    "bg-warning-1/20": type === "warning",
    "bg-error-1/20": type === "error",
  });
</script>

<div class={style}>
  {#if type === "info"}
    <InfoIcon size={20} color="primary"/>
  {/if}
  {#if type === "success"}
    <CheckIcon size={20} color="success"/>
  {/if}
  {#if type === "warning"}
    <WarningIcon size={20} color="warning"/>
  {/if}
  {#if type === "error"}
    <ReportIcon size={20} color="error"/>
  {/if}
  <Text>{message}</Text>
</div>