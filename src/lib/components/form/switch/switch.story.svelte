<script lang="ts">
  import type { Hst as Histoire } from "@histoire/plugin-svelte";
  import { Switch } from ".";
  import type { SwitchColor } from "./switch.type";
  
  export let Hst: Histoire;

  export let color: SwitchColor = "primary";
  export let label = "Label";
</script>

<Hst.Story title="Form/Input">
  <svelte:fragment slot="controls">
    <Hst.Text title="Label" bind:value={label} />
    <Hst.Select title="Color" bind:value={color} options={["primary", "secondary", "error", "success", "warning"]} />
  </svelte:fragment>

  <Hst.Variant title="Default">
    <Switch color={color} label={label} />
  </Hst.Variant>
</Hst.Story>