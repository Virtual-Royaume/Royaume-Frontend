import { expect, test } from "@playwright/experimental-ct-react";
import { Button } from "../button";

test.describe("Button", () => {
  test("update variable on click", async({ mount }) => {
    let clicked = false;

    const component = await mount(
      <Button onClick={() => clicked = true}>Hello</Button>
    );

    await expect(component).toContainText("Hello");

    await component.click();

    expect(clicked).toBeTruthy();
  });
});