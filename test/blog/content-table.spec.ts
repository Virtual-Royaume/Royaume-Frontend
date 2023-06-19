import { test, expect } from "@playwright/test";
import assert from "node:assert";

test.describe("blog content table navigation", () => {
  test.beforeEach(async({ page }) => {
    await page.goto("/blog");
  });

  test("selected item should change on click", async({ page, isMobile }) => {
    // Navigate to the post page
    const post = page.getByLabel(/.*-post$/).first();
    const linkButton = post.getByRole("link", { name: "post-link" }).first();

    await linkButton.click();

    await expect(page).toHaveURL(/\/blog\/[\w-]+/);

    // Test content table navigation
    const contentTable = page.getByRole("navigation", { name: "content-table" });

    if (isMobile) {
      const button = contentTable.getByLabel("toggle-button");
      await button.click();

      await expect(button).toHaveAttribute("aria-expanded", "true");
    }

    const ctButton = contentTable.getByRole("button", { name: /.*-button/ }).last();

    await ctButton.click();

    await expect(ctButton).not.toBeDisabled();

    // Check if title is in the viewport
    const buttonContent = await ctButton.textContent();
    assert(buttonContent !== null, "Section title is null");

    const titleSection = page.locator("h1, h2, h3", { hasText: buttonContent });

    console.log(titleSection);

    await expect(titleSection).toBeInViewport();
  });
});