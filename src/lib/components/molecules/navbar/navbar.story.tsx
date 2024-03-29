import type { Meta, StoryFn } from "@storybook/react";
import { Navbar } from "./navbar";

// Config:
export default {
  title: "Molecules/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta<typeof Navbar>;

// Template:
const Template: StoryFn<typeof Navbar> = () => <Navbar />;

// Stories:
export const Default = Template.bind({});
Default.args = {};