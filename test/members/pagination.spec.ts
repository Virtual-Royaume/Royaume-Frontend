import { test, expect } from "@playwright/test";

test.describe("pagination of the members page", () => {
  test.beforeEach(async({ page }) => {
    await page.goto("/members");
  });

  test("no page query param should set by default", async({ page }) => {
    await expect(page).toHaveURL("/members");
  });

  test("page should change by clicking on left and right arrows", async({ page }) => {
    const previousPage = page.getByRole("button", { name: "previous page" });
    const nextPage = page.getByRole("button", { name: "next page" });

    await expect(previousPage).toBeDisabled();

    await nextPage.click();

    await expect(page).toHaveURL("/members?page=2");
    await expect(previousPage).not.toBeDisabled();

    await previousPage.click();
    await expect(page).toHaveURL("/members?page=1");
  });

  test("page should change by clicking on a page number", async({ page }) => {
    await page.getByRole("button", { name: "page 3" }).click();
    await expect(page).toHaveURL("/members?page=3");

    await page.getByRole("button", { name: "page 1" }).click();
    await expect(page).toHaveURL("/members?page=1");
  });

  test("current page should be disabled", async({ page }) => {
    const pageOne = page.getByRole("button", { name: "page 1" });
    const pageTwo = page.getByRole("button", { name: "page 2" });

    await expect(pageOne).toBeDisabled();
    await expect(pageTwo).not.toBeDisabled();

    await pageTwo.click();

    await expect(pageOne).not.toBeDisabled();
    await expect(pageTwo).toBeDisabled();
  });

  test("should be displaying the right pages based on the current page", async({ page }) => {
    const pagination = page.getByRole("navigation", { name: "pagination" });

    await expect(pagination).toHaveText("12345");

    await page.getByRole("button", { name: "page 4" }).click();

    await expect(pagination).toHaveText("23456");
  });
});