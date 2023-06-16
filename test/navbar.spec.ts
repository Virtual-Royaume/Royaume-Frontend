import { test, expect } from "@playwright/test";

test("should navigate to the members page", async({ page, isMobile }) => {
  await page.goto("/");

  if (isMobile) await page.getByRole("button", { name: "hamburger" }).click();

  await page.getByRole("link", { name: "Membres" }).click();
  await expect(page).toHaveURL("/members");
});

test("should navigate to the blog page", async({ page, isMobile }) => {
  await page.goto("/");

  if (isMobile) await page.getByRole("button", { name: "hamburger" }).click();

  await page.getByRole("link", { name: "Blog" }).click();
  await expect(page).toHaveURL("/blog");
});

test("should navigate to the home page", async({ page, isMobile }) => {
  await page.goto("/members");

  if (isMobile) await page.getByRole("button", { name: "hamburger" }).click();

  await page.getByRole("link", { name: "logo" }).click();
  await expect(page).toHaveURL("/");
});