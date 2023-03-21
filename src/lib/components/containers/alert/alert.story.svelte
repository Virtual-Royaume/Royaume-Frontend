<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import { Alert } from ".";
  import type { AlertType } from "./alert.type";
  
  export let Hst: Hst;

  export let type: AlertType = "info";
  export let message = "This is an alert message";
</script>

<Hst.Story title="Containers/Alert">
  <svelte:fragment slot="controls">
    <Hst.Text title="Text" bind:value={message} />
    <Hst.Select title="Type" bind:value={type} options={["info", "success", "warning", "error"]} />
  </svelte:fragment>

  <Hst.Variant>
    <Alert message={message} type={type} />
  </Hst.Variant>
</Hst.Story>