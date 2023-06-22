import { expect, test } from "@playwright/experimental-ct-react";
import { Input } from "../input";

test.describe("Input", () => {
  test("can write text into the input", async({ mount }) => {
    const component = await mount(<Input />);

    await component.type("hello my friends");

    await expect(component).toHaveValue("hello my friends");
  });

  test("cannot write text into the input when it's disabled", async({ mount }) => {
    const component = await mount(<Input disabled />);

    await expect(component).toBeDisabled();

    await component.type("hello my friends");

    await expect(component).not.toHaveValue("hello my friends");
  });
});