import type { Meta, StoryFn } from "@storybook/react";
import { Heading } from "./heading";

// Config :
export default {
  title: "Atoms/Texts/Heading",
  component: Heading
} satisfies Meta<typeof Heading>;

// Template :
const Template: StoryFn<typeof Heading> = ({ children, ...props }) => <Heading {...props}>{children}</Heading>;

// Stories :
export const H1 = Template.bind({});
H1.args = { type: "h1", children: "This is an H1" };

export const H2 = Template.bind({});
H2.args = { type: "h2", children: "This is an H2" };

export const H3 = Template.bind({});
H3.args = { type: "h3", children: "This is an H3" };

export const H4 = Template.bind({});
H4.args = { type: "h4", children: "This is an H4" };