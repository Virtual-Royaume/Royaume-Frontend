<script lang="ts">
  import type { Hst as Histoire } from "@histoire/plugin-svelte";
  import { TextArea } from ".";
  import type { TextAreaColor, TextAreaSize, TextAreaType } from "./text-area.type";
  
  export let Hst: Histoire;

  export let color: TextAreaColor = "primary";
  export let size: TextAreaSize = "normal";
  export let type: TextAreaType = "text";
  export let label = "Label";
  export let placeholder = "Placeholder";
</script>

<Hst.Story title="Atoms/Form/TextArea">
  <svelte:fragment slot="controls">
    <Hst.Text title="Label" bind:value={label} />
    <Hst.Text title="Placeholder" bind:value={placeholder} />
    <Hst.Select title="Color" bind:value={color} options={["primary", "secondary", "error", "success", "warning"]} />
    <Hst.Select title="Size" bind:value={size} options={["small", "normal", "large"]} />
    <Hst.Select title="Type" bind:value={type} options={["text", "password", "email"]} />
  </svelte:fragment>

  <Hst.Variant title="Default">
    <TextArea color={color} size={size} type={type} label={label} placeholder={placeholder} />
  </Hst.Variant>
</Hst.Story>