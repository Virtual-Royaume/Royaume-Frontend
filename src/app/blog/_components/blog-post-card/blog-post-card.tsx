import type { Component } from "#/lib/utils/component";
import type { BlogPostCardProps } from "./blog-post-card.type";
import { Text } from "../../../../lib/components/atoms/texts";
import { dayJS } from "#/lib/utils/day-js";
import Image from "next/image";
import Link from "next/link";

export const BlogPostCard: Component<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="relative" aria-label={`${post.slug}-post`}>
      <div className="relative w-full aspect-video">
        <Image src={post.thumbnail} alt="Blog Post Thumbnail" fill className="object-cover rounded" />
      </div>

      <div className="mt-6">
        <div className="mb-2">
          <Link href={`/blog/${post.slug}`} className="text-gray-50 font-medium text-xl" aria-label="post-link">
            {post.title}
          </Link>
        </div>

        <Text className="line-clamp-2 2xl:line-clamp-4">{post.description}</Text>
      </div>

      <div className="h-20">
        <div className="absolute bottom-0 left-0 flex items-center gap-4">
          <Image src={post.author.profilePicture} alt="Author Profile Picture" width={48} height={448} className="rounded" />

          <div>
            <p className="text-gray-50 font-medium">{post.author.username}</p>
            <p className="text-gray-500 text-sm">{dayJS(post.createdAt).format("D MMMM YYYY")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};