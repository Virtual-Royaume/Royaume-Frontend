import { expect, test } from "@playwright/experimental-ct-react";
import { Input } from "../input";

test.describe("Input", () => {
  test("can write text into the input", async({ mount }) => {
    const component = await mount(<Input />);

    const input = component.getByRole("textbox");

    await input.type("hello my friends");

    await expect(input).toHaveValue("hello my friends");
  });

  test("cannot write text into the input when it's disabled", async({ mount }) => {
    const component = await mount(<Input disabled />);

    const input = component.getByRole("textbox");

    await expect(input).toBeDisabled();

    await input.type("hello my friends");

    await input.type("hello my friends");

    await expect(input).not.toHaveValue("hello my friends");
  });
});