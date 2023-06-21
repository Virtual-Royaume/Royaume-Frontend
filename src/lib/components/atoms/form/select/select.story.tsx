import type { Meta, StoryFn } from "@storybook/react";
import { Select } from "./select";

// Config:
export default {
  title: "Atoms/Form/Select",
  component: Select
} satisfies Meta<typeof Select>;

// Template:
const Template: StoryFn<typeof Select> = ({ items, ...props }) => <Select items={items ?? []} {...props} />;

// Stories:
export const Default = Template.bind({});
Default.args = { items: ["France", "Suisse", "Belgique", "Canada", "Martinique", "Autriche", "Mexique", "Brésil"] };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };