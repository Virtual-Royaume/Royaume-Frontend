import type { Meta, StoryFn } from "@storybook/react";
import { Input } from "./input";

// Config:
export default {
  title: "Atoms/Form/Input",
  component: Input
} satisfies Meta<typeof Input>;

// Template:
const Template: StoryFn<typeof Input> = (props) => <Input placeholder="Votre nom d'utilisateur" {...props} />;

// Stories:
export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };