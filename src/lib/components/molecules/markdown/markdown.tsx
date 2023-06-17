import type { Component } from "#/lib/utils/component";
import { fromMarkdown } from "mdast-util-from-markdown";
import type { MarkdownProps } from "./markdown.type";
import { MarkdownElement } from "./markdown-element";

export const Markdown: Component<MarkdownProps> = ({ source }) => {
  const markdownTree = fromMarkdown(source).children;

  return (
    <div>
      {markdownTree.map((element, i) => (
        <MarkdownElement key={i} element={element} />
      ))}
    </div>
  );
};