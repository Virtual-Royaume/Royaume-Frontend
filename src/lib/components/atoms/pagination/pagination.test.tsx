import { expect, test } from "@playwright/experimental-ct-react";
import { ComponentPagination } from "./tgm";

test("event should work", async({ mount }) => {
  const component = await mount(<ComponentPagination />);

  await expect(component).toBeInViewport();
});