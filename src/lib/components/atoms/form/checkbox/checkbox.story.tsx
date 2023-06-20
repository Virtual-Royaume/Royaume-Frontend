import type { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "./checkbox";

// Config:
export default {
  title: "Form/Checkbox",
  component: Checkbox
} satisfies Meta<typeof Checkbox>;

// Template:
const Template: StoryFn<typeof Checkbox> = (props) => <Checkbox {...props} />;

// Stories:
export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = { checked: true };