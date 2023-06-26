import type { ReactElement } from "react";
import { getOthersPosts } from "#/lib/configs/blog";
import { BlogPostCard } from "#/app/(home)/blog/_components/blog-post-card";

export const AllPostsSection = (): ReactElement => {
  const posts = getOthersPosts();

  return (
    <div className="grid grid-cols-posts-gray-800s justify-items-center gap-10 lg:gap-16">
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};