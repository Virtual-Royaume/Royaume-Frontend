<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import { Checkbox } from ".";
  import type { CheckboxColor } from "./checkbox.type";
  
  export let Hst: Histoire;

  export let color: CheckboxColor = "primary";
  export let label = "Label";
</script>

<Hst.Story title="Form/Checkbox">
  <svelte:fragment slot="controls">
    <Hst.Text title="Label" bind:value={label} />
    <Hst.Select title="Color" bind:value={color} options={["primary", "secondary", "error", "success", "warning"]} />
  </svelte:fragment>

  <Hst.Variant title="Default">
    <Checkbox color={color} label={label} />
  </Hst.Variant>
</Hst.Story>