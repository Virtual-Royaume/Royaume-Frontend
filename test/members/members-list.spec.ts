import { test } from "@playwright/test";

test("member list must be updated when the user changes page", async({ page }) => {
  await page.goto("/members");

  /**
   * @todo
   * - save members list
   * - change the page with the pagination
   * - members list must be different from the first one
   *
   * Before doing this test: we need some SEO/a11y improvement of the members list page
   */
});