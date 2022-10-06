<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Checkbox } from ".";
</script>

<Meta 
  title="Form/Checkbox"
  component={Checkbox}
  argTypes={{
    color: { control: "select", options: ["primary", "secondary", "success", "warning", "error"] },
    label: { control: "text" }
  }}
  args={{
    label: "Accepter les conditions d'utilisation"
  }}
/>

<Template let:args>
  <Checkbox {...args}/>
</Template>

<Story name="Default"/>