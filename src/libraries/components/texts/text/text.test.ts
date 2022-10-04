import { render, screen } from "@testing-library/svelte";
import { Text } from ".";

test("test ", () => {
  render(Text, { variant: "h1" });

  const heading = screen.getByText("Hello World!");

  expect(heading).toBeInTheDocument();
});