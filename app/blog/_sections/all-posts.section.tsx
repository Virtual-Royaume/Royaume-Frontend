import { BlogPostCard } from "@lib/components/atoms/cards/blog-post-card/blog-post-card";
import { getOthersPosts } from "@lib/configs/blog";
import { ReactElement } from "react";

export const AllPostsSection = (): ReactElement => {
  const posts = getOthersPosts();

  return (
    <div className="grid grid-cols-3 justify-items-center gap-20">
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};