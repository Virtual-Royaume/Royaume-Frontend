import type { ReactElement } from "react";
import { BlogPostCard } from "#/lib/components/atoms/cards/blog-post-card/blog-post-card";
import { getOthersPosts } from "#/lib/configs/blog";

export const AllPostsSection = (): ReactElement => {
  const posts = getOthersPosts();

  return (
    <div className="grid grid-cols-posts-cards justify-items-center gap-10 lg:gap-16">
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};