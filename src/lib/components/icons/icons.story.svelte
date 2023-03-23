<script lang="ts">
  import type { Hst as Histoire } from "@histoire/plugin-svelte";
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
  } from "$lib/components/icons";

  export let Hst: Histoire;
</script>

<Hst.Story title="Icons">
  <Hst.Variant>
    <div class="flex gap-2">
      <AlertCircle size={24} />
      <CheckIcon size={24} />
      <Clipboard size={24} />
      <ExternalIcon size={24} />
      <FileUploadIcon size={24} />
      <InfoIcon size={24} />
      <ReportIcon size={24} />
      <UnfoldIcon size={24} />
      <WarningIcon size={24} />
    </div>
  </Hst.Variant>
</Hst.Story>