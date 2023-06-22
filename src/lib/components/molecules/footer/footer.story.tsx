import type { Meta, StoryFn } from "@storybook/react";
import { Footer } from "./footer";

// Config :
export default {
  title: "Molecules/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta<typeof Footer>;

// Template :
const Template: StoryFn<typeof Footer> = () => <Footer />;

// Stories :
export const Default = Template.bind({});
Default.args = {};