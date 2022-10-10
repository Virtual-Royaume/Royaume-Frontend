<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Alert } from ".";
</script>

<Meta
  title="Containers/Alert"
  component={Alert}
  argTypes={{
    type: { control: "select", options: ["info", "success", "warning", "error"] },
    message: { control: "text" }
  }}
  args={{
    message: "Ceci est un message des extraterrestres"
  }}
/>

<Template let:args>
  <Alert {...args}/>
</Template>

<Story name="Default" />