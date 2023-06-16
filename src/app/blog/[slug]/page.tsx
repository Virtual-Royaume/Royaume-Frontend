import type { BlogPost } from "#/lib/configs/blog/blog.type";
import type { Component } from "#/lib/utils/component";
import type { BlogPostPageProps } from "./page.type";
import { notFound } from "next/navigation";
import { Heading } from "#/lib/components/atoms/texts/heading";
import { posts } from "#/lib/configs/blog";
import Image from "next/image";
import type { Metadata } from "next";
import { Markdown } from "#/lib/components/molecules/markdown";
import { markdown } from "./page.util";

const getPost = (slug: string): BlogPost | null => {
  return posts.find((post) => post.slug === slug) ?? null;
};

export const generateMetadata = ({ params }: BlogPostPageProps): Metadata => {
  const post = getPost(params.slug);
  if (!post) notFound();

  return {
    title: post.title,
    description: post.description,

    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.thumbnail]
    }
  };
};

const BlogPostPage: Component<BlogPostPageProps> = ({ params }) => {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="mt-28 container">
      <div className="relative mx-auto lg:w-4/6 aspect-video">
        <Image src={post.thumbnail} alt="Post Thumbnail" fill className="object-cover rounded" />
      </div>

      <Heading type="h1" className="uppercase font-medium text-center mt-10 text-3xl lg:text-5xl">{post.title}</Heading>

      <div className="mt-28">
        <Markdown source={markdown} />
      </div>
    </div>
  );
};

export default BlogPostPage;