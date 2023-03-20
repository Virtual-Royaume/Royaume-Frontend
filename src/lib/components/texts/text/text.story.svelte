<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Text } from ".";
  import type { TextType, FontWeight, TextColor, TextSize } from './text.type';
  
  export let Hst: Hst;

  export let message: string = "Message";
  export let type: TextType = "p";
  export let size: TextSize = "normal";
  export let color: TextColor = "white";
  export let fontWeight: FontWeight = "normal";
</script>

<Hst.Story title="Texts/Text">
  <svelte:fragment slot="controls">
    <Hst.Text title="Text" bind:value={message} />
    <Hst.Select title="Type" bind:value={type} options={["p", "h4", "h3", "h2", "h1"]} />
    <Hst.Select title="Size" bind:value={size} options={["small", "normal", "large", "xl", "2xl", "3xl"]} />
    <Hst.Select title="Colors" bind:value={color} options={["black", "white", "gray", "red", "primary", "inherit"]} />
    <Hst.Select title="Font Weight" bind:value={fontWeight} options={["normal", "thin", "light", "medium", "bold"]} />
  </svelte:fragment>

  <Hst.Variant title="Default">
    <Text type={type} size={size} color={color} fontWeight={fontWeight}>
      {message}
    </Text>
  </Hst.Variant>
</Hst.Story>