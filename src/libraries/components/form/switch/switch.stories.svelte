<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Switch } from ".";
</script>

<Meta 
  title="Form/Switch"
  component={Switch}
  argTypes={{
    color: { control: "select", options: ["primary", "secondary", "success", "warning", "error"] },
    label: { control: "text" }
  }}
/>

<Template let:args>
  <Switch {...args}/>
</Template>

<Story name="Default"/>