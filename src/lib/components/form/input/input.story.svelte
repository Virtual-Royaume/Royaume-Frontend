<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Input } from ".";
  import type { InputColor, InputSize, InputType } from './input.type';
  
  export let Hst: Hst;

  export let color: InputColor = "primary";
  export let size: InputSize = "normal";
  export let type: InputType = "text";
  export let label: string = "Label";
  export let placeholder: string = "Placeholder";
</script>

<Hst.Story title="Form/Input">
  <svelte:fragment slot="controls">
    <Hst.Text title="Label" bind:value={label} />
    <Hst.Text title="Placeholder" bind:value={placeholder} />
    <Hst.Select title="Color" bind:value={color} options={['primary', 'secondary', 'error', 'success', 'warning']} />
    <Hst.Select title="Size" bind:value={size} options={['small', 'normal', 'large']} />
    <Hst.Select title="Type" bind:value={type} options={['text', 'password', 'email']} />
  </svelte:fragment>

  <Hst.Variant title="Default">
    <Input color={color} size={size} type={type} label={label} placeholder={placeholder} />
  </Hst.Variant>
</Hst.Story>