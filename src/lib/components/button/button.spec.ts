import "@testing-library/jest-dom";

import { render, fireEvent, screen } from "@testing-library/svelte";

import Comp from "./button.svelte";

test("shows proper heading when rendered", () => {
    render(Comp, { name: "World!" });
    const heading = screen.getByText("Hello World!");
    expect(heading).toBeInTheDocument();
});

test("changes button text ono click", async() => {
    render(Comp, { name: "World!" });
    const button = screen.getByRole("button");

    await fireEvent.click(button);

    expect(button).toHaveTextContent("Button Clicked");
});