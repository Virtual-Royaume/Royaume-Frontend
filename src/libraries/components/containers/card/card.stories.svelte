<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Card } from ".";
</script>

<Meta
  title="Containers/Card"
  component={Card}
  argTypes={{
    title: { control: "text" },
    subTitle: { control: "text" },
    description: { control: "text" },
    image: { control: "text" },
    href: { control: "text" },
    onClick: { action: "onClick" }
  }}
  args={{
    title: "Title",
    subTitle: "Sous-titre",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas quasi explicabo dolore voluptatum! Illum?",
    image: "https://e2c-paris.fr/wp-content/uploads/2021/04/placeholder.jpg"
 }}
/>

<Template let:args>
    <Card {...args} onClick={args.onClick} />
</Template>

<Story name="Default" />