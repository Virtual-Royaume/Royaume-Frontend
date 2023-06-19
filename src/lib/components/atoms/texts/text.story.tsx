import type { Meta, StoryFn } from "@storybook/react";
import { Text } from "./text";

// Config :
export default {
  title: "Texts/Text",
  component: Text
} satisfies Meta<typeof Text>;

// Template :
const Template: StoryFn<typeof Text> = (props) => <Text {...props} />;

// Stories :
export const Default = Template.bind({});
Default.args = { children: "Text Button" };