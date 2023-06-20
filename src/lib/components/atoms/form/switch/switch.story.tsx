import type { Meta, StoryFn } from "@storybook/react";
import { Switch } from "./switch";

// Config:
export default {
  title: "Atoms/Form/Switch",
  component: Switch
} satisfies Meta<typeof Switch>;

// Template:
const Template: StoryFn<typeof Switch> = (props) => <Switch {...props} />;

// Stories:
export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = { checked: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };