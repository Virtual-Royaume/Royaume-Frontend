<script lang="ts">
  import type { Hst as Histoire } from "@histoire/plugin-svelte";
  import { AutocompleteInput } from ".";
  import type { AutocompleteInputColor, AutocompleteSize } from "./autocomplete-input.type";
  
  export let Hst: Histoire;

  export let color: AutocompleteInputColor = "primary";
  export let size: AutocompleteSize = "normal";
  export let label: string = "Label";
  export let placeholder: string = "Placeholder";
</script>

<Hst.Story title="Form/ImageDropzone">
  <svelte:fragment slot="controls">
    <Hst.Text title="Label" bind:value={label} />
    <Hst.Text title="Placeholder" bind:value={placeholder} />
    <Hst.Select title="Color" bind:value={color} options={["primary", "secondary", "error", "success", "warning"]} />
    <Hst.Select title="Size" bind:value={size} options={["small", "normal", "large"]} />
  </svelte:fragment>

  <Hst.Variant title="Default">
    <AutocompleteInput color={color} size={size} label={label} placeholder={placeholder} />
  </Hst.Variant>
</Hst.Story>