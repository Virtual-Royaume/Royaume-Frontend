<script lang="ts">
  import type { Hst as Histoire } from "@histoire/plugin-svelte";
  import { Select } from ".";
  import type { SelectColor, SelectOption, SelectSize } from "./select.type";
  
  export let Hst: Histoire;

  export let color: SelectColor = "primary";
  export let size: SelectSize = "normal";
  export let options: SelectOption[] = [
    { value: "Paris", img: "https://cdn-icons-png.flaticon.com/512/3127/3127452.png" },
    { value: "London" },
    { value: "New York" },
    { value: "Tokyo" },
    { value: "Sydney" }
  ];
  export let label = "Label";
</script>

<Hst.Story title="Form/Select">
  <svelte:fragment slot="controls">
    <Hst.Text title="Label" bind:value={label} />
    <Hst.Select title="Color" bind:value={color} options={["primary", "secondary", "error", "success", "warning"]} />
    <Hst.Select title="Size" bind:value={size} options={["small", "normal", "large"]} />
  </svelte:fragment>

  <Hst.Variant title="Default">
    <Select color={color} size={size} label={label} options={options} />
  </Hst.Variant>
</Hst.Story>