<script lang="ts">
  import type { Hst as Histoire } from "@histoire/plugin-svelte";
  import { ImageDropzone } from ".";
  import type { ImageDropzoneColor, ImageDropzoneSize } from "./image-dropzone.type";
  
  export let Hst: Histoire;

  export let color: ImageDropzoneColor = "primary";
  export let size: ImageDropzoneSize = "normal";
</script>

<Hst.Story title="Form/ImageDropzone">
  <svelte:fragment slot="controls">
    <Hst.Select title="Color" bind:value={color} options={["primary", "secondary", "error", "success", "warning"]} />
    <Hst.Select title="Size" bind:value={size} options={["small", "normal", "large"]} />
  </svelte:fragment>

  <Hst.Variant title="Default">
    <ImageDropzone color={color} size={size} />
  </Hst.Variant>
</Hst.Story>