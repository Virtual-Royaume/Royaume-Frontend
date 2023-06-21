import type { Meta, StoryFn } from "@storybook/react";
import { LinkButton } from "./link";

// Config :
export default {
  title: "Atoms/Button/Link",
  component: LinkButton
} satisfies Meta<typeof LinkButton>;

// Template :
const Template: StoryFn<typeof LinkButton> = (props) => <LinkButton {...props} />;

// Stories :
export const Default = Template.bind({});
Default.args = { href: "/", children: "Link Button" };