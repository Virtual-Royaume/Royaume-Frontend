import { expect, test } from "@playwright/test";

test("members list must be updated when the user changes page", async({ page }) => {
  await page.goto("/members");

  // Locators:
  const membersList = page.getByRole("list", { name: "members list" });
  const paginationNext = page.getByRole("button", { name: "next page" });

  // Get current texts of members list:
  const texts = await membersList.allTextContents();

  // Go to the next page:
  await paginationNext.click();

  // The two members lists should be different:
  await expect(membersList).not.toHaveText(texts);
  console.log(await membersList.allTextContents());
});