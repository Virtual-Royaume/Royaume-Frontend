<script lang="ts">
  import type { Hst as Histoire } from "@histoire/plugin-svelte";
  import { Loading } from ".";
  import type { LoadingType } from "./loading.type";
  
  export let Hst: Histoire;

  export let type: LoadingType = "primary";
</script>

<Hst.Story title="Atoms/Navigation/Loading">
  <svelte:fragment slot="controls">
    <Hst.Select title="Type" bind:value={type} options={["primary", "secondary", "success", "warning", "error", "normal"]} />
  </svelte:fragment>

  <Hst.Variant>
    <Loading color={type} />
  </Hst.Variant>
</Hst.Story>