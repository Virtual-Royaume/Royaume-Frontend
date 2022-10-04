<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import { Button } from ".";

  export let Hst: Hst;
</script>

<Hst.Story>
  <Hst.Variant>
    <Button>Test</Button>
  </Hst.Variant>
</Hst.Story>

<!-- <Meta 
  title="Button"
  component={Button}
  argTypes={{
    variant: { control: "select", options: ["text", "contained", "outlined"] },
    disabled: { control: "boolean" },
    onClick:  { action: "onClick" },
    href: { control: "text" },
    size: { control: "select", options: ["small", "medium", "large"] }
  }}
/> -->

<!-- <Template let:args>
  <Button {...args} onClick={args.onClick}>Text</Button>
</Template>

<Story name="Text" args={{ variant: "text" }}/>

<Story name="Contained" args={{ variant: "contained" }}/>

<Story name="Outlined" args={{ variant: "outlined" }}/> -->