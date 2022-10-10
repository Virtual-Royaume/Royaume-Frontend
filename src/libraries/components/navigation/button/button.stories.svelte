<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Button } from ".";
</script>

<Meta 
  title="Navigation/Button"
  component={Button}
  argTypes={{
    variant: { control: "select", options: ["text", "contained", "outlined"] },
    size: { control: "select", options: ["small", "medium", "large","full"] },
    color: { control: "select", options: ["primary", "secondary", "error", "success", "warning"] },
    disabled: { control: "boolean" },
    href: { control: "text" },
    onClick:  { action: "onClick" }
  }}
/>

<Template let:args>
  <Button {...args} onClick={args.onClick}>Text</Button>
</Template>

<Story name="Text" args={{ variant: "text" }}/>

<Story name="Contained" args={{ variant: "contained" }}/>

<Story name="Outlined" args={{ variant: "outlined" }}/>