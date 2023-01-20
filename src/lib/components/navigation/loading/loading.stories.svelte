<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Loading } from ".";
</script>

<Meta 
  title="Navigation/Loading"
  component={Loading}
  argTypes={{
    color: { control: "select", options: ["primary", "secondary", "success", "warning", "error", "normal"] }
  }}
/>

<Template let:args>
  <Loading {...args}/>
</Template>

<Story name="Default"/>