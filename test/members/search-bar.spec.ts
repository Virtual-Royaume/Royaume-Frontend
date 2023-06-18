import { expect, test } from "@playwright/test";

test("find a member using the search bar", async({ page }) => {
  await page.goto("/members");

  const searchBar = page.getByRole("textbox", { name: "Rechercher un membre" });
  const membersList = page.getByRole("list", { name: "members list" });

  await expect(membersList.getByRole("listitem")).toHaveCount(12);

  await searchBar.fill("Bluzzi");

  await expect(membersList).toHaveCount(1);
  await expect(membersList.getByRole("listitem").first()).toContainText("Bluzzi");
  await expect(page.getByText("1 résultat")).toBeVisible();
});