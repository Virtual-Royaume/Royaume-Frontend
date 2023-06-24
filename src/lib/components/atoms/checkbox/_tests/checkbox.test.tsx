import { expect, test } from "@playwright/experimental-ct-react";
import { Checkbox } from "#/lib/components/atoms/checkbox/checkbox";

test.describe("Checkbox", () => {
  test("the checkbox have to be checked on click", async({ mount }) => {
    const component = await mount(<Checkbox />);

    await component.click();

    const input = component.locator("input");

    await expect(input).toBeChecked();
  });

  test("the checkbox have to be unchecked on click", async({ mount }) => {
    const component = await mount(<Checkbox checked />);

    await component.click();

    const input = component.locator("input");

    await expect(input).not.toBeChecked();
  });

  test("the checkbox cannot be clicked", async({ mount }) => {
    const component = await mount(<Checkbox disabled />);

    await component.click();

    const input = component.locator("input");

    await expect(input).not.toBeChecked();
  });
});