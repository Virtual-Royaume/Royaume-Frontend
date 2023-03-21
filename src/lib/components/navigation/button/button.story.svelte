<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import { Button } from ".";
  import type { ButtonColor, ButtonSize, ButtonVariant } from "./button.type";
  
  export let Hst: Hst;

  export let label = "Button";
  export let color: ButtonColor = "primary";
  export let size: ButtonSize = "medium";
  export let variant: ButtonVariant = "contained";

  export let disabled = false;
</script>

<Hst.Story title="Navigation/Button">
  <svelte:fragment slot="controls">
    <Hst.Text title="Text" bind:value={label} />
    <Hst.Select title="Color" bind:value={color} options={["primary", "secondary", "error", "success", "warning", "normal"]} />
    <Hst.Select title="Size" bind:value={size} options={["small", "medium", "large", "full"]} />
    <Hst.Select title="Variant" bind:value={variant} options={["contained", "outlined", "text"]} />
    <Hst.Checkbox title="Disabled" bind:value={disabled} />
  </svelte:fragment>

  <Hst.Variant>
    <Button color={color} size={size} variant={variant} disabled={disabled}>
      {label}
    </Button>
  </Hst.Variant>
</Hst.Story>