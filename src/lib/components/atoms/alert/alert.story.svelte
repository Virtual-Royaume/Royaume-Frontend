<script lang="ts">
  import type { Hst as Histoire } from "@histoire/plugin-svelte";
  import { Alert } from ".";
  import type { AlertColor } from "./alert.type";
  
  export let Hst: Histoire;

  export let color: AlertColor = "info";
  export let message = "This is an alert message";
</script>

<Hst.Story title="Atoms/Alert">
  <svelte:fragment slot="controls">
    <Hst.Text title="Text" bind:value={message} />
    <Hst.Select title="Type" bind:value={color} options={[
      "primary",
      "primary-2",
      "secondary",
      "secondary-2",
      "success",
      "success-2",
      "warning",
      "warning-2",
      "danger",
      "danger-2",
      "white",
      "black",
      "gray",
      "gray-2",
      "gray-3",
      "gray-4",
      "red",
      "green",
      "info",
      "info-2"
    ]} />
  </svelte:fragment>

  <Hst.Variant>
    <Alert message={message} color={color} />
  </Hst.Variant>
</Hst.Story>