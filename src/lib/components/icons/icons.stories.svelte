<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Icons from "./icons.svelte";
</script>

<Meta 
  title="Icons" 
  component={Icons} 
  args={{
    size: 24,
    color: "black"
  }} 
/>

<Template let:args>
  <Icons {...args} />
</Template>

<Story name="Default" />