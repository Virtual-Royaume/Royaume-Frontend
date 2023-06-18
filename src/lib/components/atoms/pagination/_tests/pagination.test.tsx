import { expect, test } from "@playwright/experimental-ct-react";
import { PaginationWrapper } from "./pagination-wrapper";

test.describe("Pagination", () => {
  test("the default active page should be the first", async({ mount }) => {
    const component = await mount(<PaginationWrapper />);

    await expect(component.getByRole("button", { name: "page 1" })).toHaveAttribute("aria-current", "page");
  });

  test("should be have only one current page", async({ mount }) => {
    const component = await mount(<PaginationWrapper />);

    const currentPage = component.locator("[aria-current='page']");

    await expect(currentPage).toHaveCount(1);
  });

  test("active page should be disabled", async({ mount }) => {
    const component = await mount(<PaginationWrapper />);

    await expect(component.locator("[aria-current='page']")).toBeDisabled();
  });

  test("when the selected page is the first, the left arrow must be disabled and not the right arrow", async({ mount }) => {
    const component = await mount(<PaginationWrapper defaultPage={1} />);

    await expect(component.getByRole("button", { name: "previous page" })).toBeDisabled();
    await expect(component.getByRole("button", { name: "next page" })).not.toBeDisabled();
  });

  test("when the selected page is the last, the left arrow must be disabled and not the right arrow", async({ mount }) => {
    const component = await mount(<PaginationWrapper defaultPage={7} />);

    await expect(component.getByRole("button", { name: "previous page" })).not.toBeDisabled();
    await expect(component.getByRole("button", { name: "next page" })).toBeDisabled();
  });

  test("active page should change by clicking on the left and right arrows", async({ mount }) => {
    const component = await mount(<PaginationWrapper />);

    const currentPage = component.locator("[aria-current='page']");

    const previousPage = component.getByRole("button", { name: "previous page" });
    const nextPage = component.getByRole("button", { name: "next page" });

    for (let pageNumber = 2; pageNumber <= 7; pageNumber++) {
      await nextPage.click();
      await expect(currentPage).toHaveText(`${pageNumber}`);
    }

    for (let pageNumber = 6; pageNumber >= 1; pageNumber--) {
      await previousPage.click();
      await expect(currentPage).toHaveText(`${pageNumber}`);
    }
  });

  test("page should be change by clicking on page numbers", async({ mount }) => {
    const component = await mount(<PaginationWrapper />);

    const currentPage = component.locator("[aria-current='page']");
    const pathToTest = [2, 1, 3, 4, 5, 6, 7];

    for (const pageNumber of pathToTest) {
      await component.getByRole("button", { name: `page ${pageNumber}` }).click();
      await expect(currentPage).toHaveText(`${pageNumber}`);
    }
  });

  test("pagination should always be display 5 page numbers", async({ mount }) => {
    const component = await mount(<PaginationWrapper />);

    await expect(component).toHaveText("12345");

    await component.getByRole("button", { name: "page 5" }).click();

    await expect(component).toHaveText("34567");
  });
});