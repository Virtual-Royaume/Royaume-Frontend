import { Text } from "#/lib/components/atoms/texts";
import type { Component } from "#/lib/utils/component";
import Link from "next/link";
import type { MarkdownElementProps } from "./markdown-element.type";
import { MDHeading } from "../elements/md-heading";
import { MDCode } from "../elements/md-code";
import { s } from "#/lib/utils/style/class";

export const MarkdownElement: Component<MarkdownElementProps> = ({ element, parent = null }) => {
  if (parent) {
    if (parent.type === "heading" && element.type === "text") {
      return <MDHeading depth={parent.depth} text={element.value} />;
    }

    if (parent.type === "blockquote" && element.type === "paragraph" && element.children[0].type === "text") {
      return <Text className={s(
        "relative pl-4 italic my-4",
        "before:content-[''] before:absolute before:h-full before:w-1 before:bg-purple before:left-0"
      )}>{element.children[0].value}</Text>;
    }

    if (parent.type === "paragraph") {
      if (element.type === "strong" && element.children[0].type === "text") {
        return <strong>{element.children[0].value}</strong>;
      }

      if (element.type === "emphasis" && element.children[0].type === "text") {
        return <em>{element.children[0].value}</em>;
      }

      if (element.type === "link" && element.children[0].type === "text") {
        return <Link href={element.url} target="_blank" className="text-link hover:underline">{element.children[0].value}</Link>;
      }

      if (element.type === "image") {
        return <img src={element.url} alt={element.alt ?? ""} className="lg:max-w-3xl mx-auto my-10 rounded" />;
      }

      if (element.type === "text") {
        return <>{element.value}</>;
      }

      return <Text>ERROR : Unsupported element</Text>;
    }

    if (element.type === "listItem") {
      return (
        <>
          {element.children.map((child, i) => {
            if (child.type === "paragraph") {
              return (
                <li key={i}>
                  <MarkdownElement element={child} />
                </li>
              );
            }

            if (child.type === "list") {
              return <MarkdownElement key={i} element={child} />;
            }
          })}
        </>
      );
    }

    return <Text>ERROR : Unsupported element</Text>;
  }

  if (element.type === "thematicBreak") {
    return <hr />;
  }

  if (element.type === "heading" || element.type === "blockquote") {
    return <MarkdownElement parent={element} element={element.children[0]} />;
  }

  if (element.type === "paragraph") {
    return (
      <Text className="text-white-desc">
        {element.children.map((child, i) => (
          <MarkdownElement key={i} parent={element} element={child} />
        ))}
      </Text>
    );
  }

  if (element.type === "list") {
    const listStyle = s(" ml-6 text-white-desc", {
      "list-descimal": element.ordered,
      "list-disc": !element.ordered
    });
    return (
      <ul className={listStyle}>
        {element.children.map((child, i) => (
          <MarkdownElement key={i} parent={element} element={child} />
        ))}
      </ul>
    );
  }

  if (element.type === "code") {
    return <MDCode lang={element.lang} value={element.value} />;
  }

  return <Text>ERROR : Unsupported element</Text>;
};