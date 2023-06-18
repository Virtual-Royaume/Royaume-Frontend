import { test, expect } from "@playwright/test";

test.describe("blog content table navigation", () => {
  test.beforeEach(async({ page }) => {
    await page.goto("/blog");
  });

  test("selected item should change on click", async({ page, isMobile }) => {
    // Navigate to de post page
    const post = page.getByLabel(/.*-post$/).first();
    const linkButton = post.getByRole("link", { name: "post-link" });

    const link = await linkButton.getAttribute("href");
    if (!link) return test.fail();

    await linkButton.click();

    await expect(page).toHaveURL(link);

    // Test content table navigation
    const contentTable = page.getByLabel("content-table");

    if (isMobile) {
      const button = contentTable.getByLabel("toggle-button");
      await button.click();

      await expect(button).toHaveAttribute("aria-expanded", "true");
    }

    const ctButton = contentTable.getByRole("button", { name: /.*-button/ }).last();

    await ctButton.click();

    await expect(ctButton).not.toBeDisabled();
  });
});