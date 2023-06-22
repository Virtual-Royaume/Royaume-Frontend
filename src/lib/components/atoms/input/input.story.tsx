import type { Meta, StoryFn } from "@storybook/react";
import { Input } from "./input";
import { IoIosContact } from "react-icons/io";

// Config:
export default {
  title: "Atoms/Inputs/Input",
  component: Input
} satisfies Meta<typeof Input>;

// Template:
const Template: StoryFn<typeof Input> = (props) => <Input placeholder="Votre nom d'utilisateur" {...props} />;

// Stories:
export const Default = Template.bind({});
Default.args = {};

export const Icon = Template.bind({});
Icon.args = {
  icon: <IoIosContact />
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };