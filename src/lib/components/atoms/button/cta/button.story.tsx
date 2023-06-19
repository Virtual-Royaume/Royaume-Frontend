import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "./button";

// Config :
export default {
  title: "Atoms/Button/Cta",
  component: Button
} satisfies Meta<typeof Button>;

// Template :
const Template: StoryFn<typeof Button> = (props) => <Button {...props} />;

// Stories :
export const Default = Template.bind({});
Default.args = { children: "Cta Button" };