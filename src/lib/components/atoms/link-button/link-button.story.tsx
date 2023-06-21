import type { Meta, StoryFn } from "@storybook/react";
import { LinkButton } from "./link-button";

// Config :
export default {
  title: "Atoms/Buttons/LinkButton",
  component: LinkButton
} satisfies Meta<typeof LinkButton>;

// Template :
const Template: StoryFn<typeof LinkButton> = (props) => <LinkButton {...props} />;

// Stories :
export const Default = Template.bind({});
Default.args = { href: "/", children: "Link Button" };