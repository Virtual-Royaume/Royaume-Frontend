<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import type { Type, Color, Size, FontWeight } from "./text.type";
  import { Text } from ".";

  export let H: Hst;

  // Default props :
  export let type: Type = "p";
  export let size: Size = "normal";
  export let color: Color = "black";
  export let fontWeight: FontWeight = "normal";

  // Default value :
  const content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae totam reprehenderit modi alias.";

  // Controls :
  const typeOptions: Record<Type, string> = {
    "h1": "H1",
    "h2": "H2",
    "h3": "H3",
    "h4": "H4",
    "p": "Paragraph"
  };
  const sizeOptions: Record<Size, string> = {
    "small": "Small",
    "normal": "Normal",
    "large": "Large",
    "xl": "XL",
    "2xl": "2XL",
    "3xl": "3XL"
  };
  const colorOptions: Record<Color, string> = {
    "black": "Black",
    "white": "White",
    "gray": "Gray",
    "red": "Red",
    "primary": "Primary"
  };
  const fontWeightOptions: Record<FontWeight, string> = {
    "thin": "Thin",
    "normal": "Normal",
    "bold": "Bold"
  };
</script>

<H.Story title="Texts/Text">
  <svelte:fragment slot="controls">
    <H.Select title="Type" bind:value={type} options={typeOptions} />
    <H.Select title="Size" bind:value={size} options={sizeOptions} />
    <H.Select title="Color" bind:value={color} options={colorOptions} />
    <H.Select title="Font Weight" bind:value={fontWeight} options={fontWeightOptions} />
  </svelte:fragment>

  <H.Variant title="Default">
    <Text {type} {size} {color} {fontWeight}>{content}</Text>
  </H.Variant>

  <H.Variant title="Title">
    <Text type="h1" size="2xl">{content}</Text>
  </H.Variant>

  <H.Variant title="Error">
    <Text color="red" size="small">{content}</Text>
  </H.Variant>
</H.Story>