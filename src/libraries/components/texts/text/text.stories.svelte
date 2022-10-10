<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Text } from ".";
</script>

<Meta 
  title="Texts/Text" 
  component={Text}
  argTypes={{
    type: { control: "select", options: ["p", "h1", "h2", "h3", "h4"] },
    size: { control: "select", options: ["small", "normal", "large", "xl", "2xl", "3xl"] },
    color: { control: "select", options: ["black", "white", "gray", "red", "primary"] },
    fontWeight: { control: "select", options: ["thin", "light", "normal", "medium", "bold"] }
  }}
/>

<Template let:args>
  <Text {...args}>Text</Text>
</Template>

<Story name="Default"/>

<Story name="Title" args={{ type: "h1", size: "3xl" }}/>

<Story name="Error" args={{ size: "small", color: "red" }}/>