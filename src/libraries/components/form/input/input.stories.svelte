<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Input } from ".";
</script>

<Meta 
  title="Form/Input"
  component={Input}
  argTypes={{
    color: { control: "select", options: ["primary", "secondary", "success", "warning", "error"] },
    label: { control: "text" },
    placeholder: { control: "text" },
    autofocus: { control: "boolean" },
    required: { control: "boolean" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    size: { control: "select", options: ["small", "normal", "large"] }
  }}
  args={{
    label: "Adresse email",
    value: "romainsav@royaume.world"
  }}
/>

<Template let:args>
  <Input {...args}/>
</Template>

<Story name="Default"/>