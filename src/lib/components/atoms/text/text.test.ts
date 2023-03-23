import { test, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import { Text } from ".";
import html from "svelte-htm";

test("test", () => {
  render(html`<${Text}>Hello world!<//>`);

  expect(screen.getByText("Hello world!")).toBeDefined();
});