import type { Meta, StoryFn } from "@storybook/react";
import { Label } from "./label";
import { Input } from "../input";

// Config:
export default {
  title: "Form/Label",
  component: Label
} satisfies Meta<typeof Label>;

// Template:
const Template: StoryFn<typeof Label> = (props) => (
  <Label {...props}>
    <Input />
  </Label>
);

// Stories:
export const Default = Template.bind({});
Default.args = { title: "Username" };

export const Required = Template.bind({});
Required.args = { title: "Username", required: true };

export const ErrorMessage = Template.bind({});
ErrorMessage.args = { title: "Username", error: "Ce champ est requis." };