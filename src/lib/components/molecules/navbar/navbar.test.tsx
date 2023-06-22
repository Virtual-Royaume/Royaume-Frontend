import { expect, test } from "@playwright/experimental-ct-react";
import { Navbar } from "./navbar";

test.describe("Navbar", () => {
  test("should navigate to the members page", async({ mount, page, isMobile }) => {
    const component = await mount(<Navbar />);

    if (isMobile) await component.getByRole("button", { name: "hamburger" }).click();

    await component.getByRole("link", { name: "Membres" }).click();
    await expect(page).toHaveURL("/members");
  });

  test("should navigate to the blog page", async({ mount, page, isMobile }) => {
    const component = await mount(<Navbar />);

    if (isMobile) await component.getByRole("button", { name: "hamburger" }).click();

    await component.getByRole("link", { name: "Blog" }).click();
    await expect(page).toHaveURL("/blog");
  });

  test("should navigate to the home page", async({ mount, page, isMobile }) => {
    const component = await mount(<Navbar />);

    if (isMobile) await component.getByRole("button", { name: "hamburger" }).click();

    await component.getByRole("link", { name: "logo" }).click();
    await expect(page).toHaveURL("/");
  });
});