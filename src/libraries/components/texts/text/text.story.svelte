<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import type { Type, Color, Size, FontWeight } from "./text.type";
  import { Text } from ".";

  export let Hst: Hst;

  // Default props :
  export let type: Type = "p";
  export let size: Size = "normal";
  export let color: Color = "black";
  export let fontWeight: FontWeight = "normal";

  // Default value :
  const content: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae totam reprehenderit modi alias.";

  // Controls :
  const typeOptions: Record<Type, string> = {
    "h1": "H1",
    "h2": "H2",
    "h3": "H3",
    "h4": "H4",
    "p": "Paragraph"
  }
  const sizeOptions: Record<Size, string> = {
    "small": "Small",
    "normal": "Normal",
    "large": "Large",
    "xl": "XL",
    "2xl": "2XL",
    "3xl": "3XL"
  }
  const colorOptions: Record<Color, string> = {
    "black": "Black",
    "white": "White",
    "gray": "Gray",
    "red": "Red",
    "primary": "Primary"
  }
  const fontWeightOptions: Record<FontWeight, string> = {
    "thin": "Thin",
    "normal": "Normal",
    "bold": "Bold"
  }
</script>

<Hst.Story title="Texts/Text">
  <svelte:fragment slot="controls">
    <Hst.Select title="Type" bind:value={type} options={typeOptions} />
    <Hst.Select title="Size" bind:value={size} options={sizeOptions} />
    <Hst.Select title="Color" bind:value={color} options={colorOptions} />
    <Hst.Select title="Font Weight" bind:value={fontWeight} options={fontWeightOptions} />
  </svelte:fragment>

  <Hst.Variant title="Default">
    <Text {type} {size} {color} {fontWeight}>{content}</Text>
  </Hst.Variant>

  <Hst.Variant title="Title">
    <Text type="h1" size="2xl">{content}</Text>
  </Hst.Variant>

  <Hst.Variant title="Error">
    <Text color="red" size="small">{content}</Text>
  </Hst.Variant>
</Hst.Story>