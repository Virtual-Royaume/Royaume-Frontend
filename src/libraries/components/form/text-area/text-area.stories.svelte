<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { TextArea } from ".";
</script>
  
<Meta 
  title="Form/TextArea"
  component={TextArea}
  argTypes={{
    color: { control: "select", options: ["primary", "secondary", "success", "warning", "error"] },
    label: { control: "text" },
    placeholder: { control: "text" },
    type: { control: "select", options: ["text", "password", "email"] },
    autofocus: { control: "boolean" },
    required: { control: "boolean" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    size: { control: "select", options: ["small", "normal", "large"] },
    autoResize: { control: "boolean" },
    rows: { control: "number" }
  }}
  args={{
    label: "Description",
    value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque, maxime tenetur eos sint at quo minus similique blanditiis ab nobis! Quod quasi eius quae eaque asperiores dolorum obcaecati nisi!",
    autoResize: true
  }}
/>
  
<Template let:args>
  <TextArea {...args}/>
</Template>

<Story name="Default"/>