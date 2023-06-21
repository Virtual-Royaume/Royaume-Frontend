import type { BlogPost } from "#/lib/configs/blog/blog.type";
import type { Component } from "#/lib/utils/component";
import type { BlogPostPageProps } from "./page.type";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Heading } from "#/lib/components/atoms/texts/heading";
import { Markdown } from "#/lib/components/molecules/markdown";
import { ContentTable } from "#/lib/components/molecules/content-table";
import { posts } from "#/lib/configs/blog";
import { markdown } from "./page.util";
import Image from "next/image";

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

  const titles = (markdown.match(/#.+/g) ?? [])
    .filter((title) => title.startsWith("# "))
    .map((title) => title.substring(2));

  return (
    <div className="mt-28 container grid lg:grid-cols-[1fr_16rem] xl:grid-cols-[1fr_20rem] gap-10">
      <div>
        <div className="relative mx-auto lg:w-4/6 aspect-video">
          <Image src={post.thumbnail} alt="Post Thumbnail" fill className="object-cover rounded" />
        </div>

        <Heading type="h1" className="uppercase font-medium text-center mt-10 text-3xl lg:text-5xl">{post.title}</Heading>

        <div className="mt-12 lg:mt-24">
          <Markdown source={markdown} />
        </div>
      </div>
      <div className="-order-1 lg:order-1">
        <ContentTable items={titles} />
      </div>
    </div>
  );
};

export default BlogPostPage;