export const markdown = `
# Getting started
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus justo. Nullam euismod, sem ut feugiat finibus, sem ligula sollicitudin
 risus, maximus pharetra risus ligula quis lacus. In at dolor sed ante suscipit faucibus id ullamcorper enim. Cras eget risus at ex maximus 
 pellentesque. Cras finibus sed enim auctor congue. Donec at gravida lorem, vulputate facilisis diam. Etiam quis sem pharetra, sollicitudin lectus 
 semper, vulputate felis.

 > Vive la vie

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
      "after:content-[''] after:w-10 after:h-1 after:rounded after:bg-purple after:absolute after:-bottom-1 after:left-0"
    )}>{text}</h2>;
  }

  if (depth === 2) {
    return <h3 className={clsx(styles, "text-xl mt-4 mb-2")}>{text}</h3>;
  }

  return <h4 className={clsx(styles, "mt-2")}>{text}</h4>;
};
\`\`\`

## How to do ?
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus justo. Nullam euismod, sem ut feugiat finibus, sem ligula sollicitudin
 risus, maximus pharet

### Test
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec dapibus justo. Nullam euismod, sem ut feugiat finibus, sem ligula sollicitudin
 risus, maximus pharet

# Discussion/Help
Morbi fringilla nibh ac sem sodales tincidunt. Donec ultricies convallis laoreet. Morbi scelerisque vehicula neque, sed tincidunt risus egestas eget. 
Maecenas dolor diam, lobortis nec sodales vestibulum, mollis varius quam. Quisque porta nibh eu euismod feugiat. Nunc porttitor sagittis luctus. 
Morbi quis vestibulum purus. Integer dolor lorem, sollicitudin non suscipit a, semper a massa. Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Nullam posuere eros ligula, vel dignissim ipsum molestie eget.

# For developers
Sed tellus odio, maximus vitae risus id, finibus ultricies orci. Sed ornare semper ultrices. Interdum et malesuada fames ac ante ipsum primis in 
faucibus. Nam eget mauris nisi. Vestibulum dolor turpis, finibus at eros quis, laoreet ullamcorper risus. Sed ut nisl aliquam, pretium metus at, 
placerat risus. Aliquam scelerisque bibendum ullamcorper. Donec dictum lacus quis lacinia gravida. Nam lorem nulla, maximus eget lacinia ut, 
malesuada ac nibh. Cras placerat justo dolor, in tristique tortor ultricies quis. In elementum magna in arcu euismod, et porta ante lacinia. Cras 
auctor mi tristique ligula ullamcorper imperdiet. Vestibulum ullamcorper dui sit amet tortor commodo, id viverra sem venenatis. Aliquam faucibus 
gravida odio. Suspendisse ac eros dapibus odio rhoncus accumsan.

# Donate
Aliquam erat volutpat. Nunc a interdum justo, vitae porta dui. Sed est magna, sagittis at egestas in, mollis a erat. Vestibulum sed eros diam. Nulla 
pretium metus lacus, eget mollis lorem molestie laoreet. Suspendisse potenti. Vivamus ut libero dapibus, tristique nibh in, ornare sapien. Fusce nunc 
ex, consequat porta ante pretium, lacinia accumsan orci. Quisque lacinia maximus aliquet.

# Licensing information
Duis id eros et mauris semper vulputate quis vitae nisi. Pellentesque ac vehicula justo, id pretium libero. Etiam scelerisque erat vitae tortor 
posuere, et aliquam mauris ullamcorper. Donec ut risus nisi. Integer et nibh id ligula finibus varius at sed turpis. Mauris nulla metus, accumsan in 
ullamcorper lobortis, ultricies id nisl. Cras semper arcu facilisis purus tincidunt, eu maximus ipsum aliquet. Vestibulum quis porta enim, eu tempus 
enim. Pellentesque ultricies posuere tincidunt.
`;