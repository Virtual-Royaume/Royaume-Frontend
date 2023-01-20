<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { ImageDropzone } from ".";
</script>

<Meta 
  title="Form/ImageDropzone"
  component={ImageDropzone}
  argTypes={{
    color: { control: "select", options: ["primary", "secondary", "success", "warning", "error"] },
    label: { control: "text" }
  }}
  args={{
    label: "Accepter les conditions d'utilisation"
  }}
/>

<Template let:args>
  <ImageDropzone {...args}/>
</Template>

<Story name="Default"/>