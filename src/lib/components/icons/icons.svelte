<script lang="ts">
  import type { IconColor } from "./icon.type";
  import {
    AlertCircle,
    CheckIcon,
    Clipboard,
    ExternalIcon,
    FileUploadIcon,
    InfoIcon,
    ReportIcon,
    UnfoldIcon,
    WarningIcon
  } from ".";

  export let size: number = 24;
  export let color: IconColor = "black";
</script>

<div class="flex gap-2 flex-wrap">
  <AlertCircle size={size} color={color} />
  <CheckIcon size={size} color={color} />
  <Clipboard size={size} color={color} />
  <ExternalIcon size={size} color={color} />
  <FileUploadIcon size={size} color={color} />
  <InfoIcon size={size} color={color} />
  <ReportIcon size={size} color={color} />
  <UnfoldIcon size={size} color={color} />
  <WarningIcon size={size} color={color} />
</div>