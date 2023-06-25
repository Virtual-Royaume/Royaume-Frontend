export const markdown = `
# Titre 1
## Titre 2
### Titre 3

# Basic text
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus justo. Nullam euismod, sem ut feugiat finibus, sem ligula sollicitudin
risus, maximus pharetra risus ligula quis lacus. In at dolor sed ante suscipit faucibus id ullamcorper enim. Cras eget risus at ex maximus 
pellentesque. Cras finibus sed enim auctor congue. Donec at gravida lorem, vulputate facilisis diam. Etiam quis sem pharetra, sollicitudin lectus 
semper, vulputate felis.

 # Enumération
 - Premier
 - Deuxième
 - Troisième

# Blockquote
> Lorem ipsum

# Links
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus justo. Nullam euismod, sem ut feugiat finibus, sem ligula sollicitudin
risus, maximus pharetra risus [join the Royaume Discord](https://royaume.world/discord) quis lacus. 
In at dolor sed ante suscipit faucibus id ullamcorper enim. Cras eget risus at ex maximus 
pellentesque. Cras finibus sed enim auctor congue. Donec at gravida lorem, vulputate facilisis diam. Etiam quis sem pharetra, sollicitudin lectus 
semper, vulputate felis.

# Strong
This is a **strong** text

# Italic
This is an *italic* text

# Code
\`\`\`ts
import type { Component } from "#/lib/utils/component";
import clsx from "clsx";
import type { MDHeadingProps } from "./md-heading.type";

export const MDHeading: Component<MDHeadingProps> = ({ text, depth }) => {
  const styles = "relative text-white font-medium";

  if (depth === 1) {
    return <h2 className={clsx(
      styles,
      "text-2xl mt-8 mb-4",
      "after:content-[''] after:w-10 after:h-1 after:rounded after:bg-primary-500 after:absolute after:-bottom-1 after:left-0"
    )}>{text}</h2>;
  }

  if (depth === 2) {
    return <h3 className={clsx(styles, "text-xl mt-4 mb-2")}>{text}</h3>;
  }

  return <h4 className={clsx(styles, "mt-2")}>{text}</h4>;
};
\`\`\`

# Image
![Royaume Banner](/images/banner.png)
`;