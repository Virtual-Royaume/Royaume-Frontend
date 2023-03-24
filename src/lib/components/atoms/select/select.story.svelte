<script lang="ts">
  import type { Hst as Histoire } from "@histoire/plugin-svelte";
  import { Select } from ".";
  import type { SelectOption } from "./select.type";
  
  export let Hst: Histoire;

  export let options: SelectOption[] = [
    { value: "Paris", img: "https://cdn-icons-png.flaticon.com/512/3127/3127452.png" },
    { value: "London" },
    { value: "New York" },
    { value: "Tokyo" },
    { value: "Sydney" }
  ];
  export let label = "Label";
</script>

<Hst.Story title="Atoms/Form/Select">
  <svelte:fragment slot="controls">
    <Hst.Text title="Label" bind:value={label} />
  </svelte:fragment>

  <Hst.Variant title="Default">
    <Select label={label} options={options} />
  </Hst.Variant>
</Hst.Story>