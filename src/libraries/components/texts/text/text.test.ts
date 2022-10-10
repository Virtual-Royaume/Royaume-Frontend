import { render, screen } from "@testing-library/svelte";
import { Text } from ".";

test("test", () => {
  render(Text);

  const heading = screen.getByText("Hello World!");

  expect(heading).toBeInTheDocument();
});