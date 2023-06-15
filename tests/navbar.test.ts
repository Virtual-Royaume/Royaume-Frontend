import { test, expect } from '@playwright/test'
 
test('should navigate to the members page', async ({ page }) => {
  await page.goto("/")
  await page.getByRole("link", { name: "Membres"}).click();
  await expect(page).toHaveURL("/members");
})

test('should navigate to the blog page', async ({ page }) => {
  await page.goto("/")
  await page.getByRole("link", { name: "Blog"}).click();
  await expect(page).toHaveURL("/blog");
})

test('should navigate to the home page', async ({ page }) => {
  await page.goto("/members")
  await page.getByRole("link", { name: "logo" }).click();
  await expect(page).toHaveURL("/");
});