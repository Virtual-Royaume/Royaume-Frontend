import type { ReactElement } from "react";
import { getLastPost } from "@lib/configs/blog";
import Image from "next/image";
import { Heading } from "@lib/components/atoms/texts/heading";
import { Text } from "@lib/components/atoms/texts";
import { BsArrowRight } from "react-icons/bs";
import { DayJS } from "@lib/utils/day-js";
import Link from "next/link";

export const LastPostSection = (): ReactElement => {
  const post = getLastPost();

  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-14">
      <div className="relative aspect-video">
        <Image src={post.thumbnail} alt="Post Thumbnail" fill className="rounded-md object-cover" />
      </div>

      <div className="relative">
        <div className="bg-purple w-fit py-1 px-2 rounded-md mb-4">
          <p className="text-white-desc text-sm">Dernière publication</p>
        </div>

        <div className="mb-4">
          <Link href={`/blog/${post.slug}`} className="text-white font-medium text-2xl xl:text-3xl 2xl:text-4xl">
            {post.title}
          </Link>
        </div>

        <Text className="line-clamp-2 2xl:line-clamp-4">{post.description}</Text>

        <div className="mt-2 w-fit hidden xl:block">
          <Link href={`/blog/${post.slug}`}>
            <BsArrowRight className="text-white-desc w-6 h-6 " />
          </Link>
        </div>

        <div className="h-20">
          <div className="absolute bottom-0 left-0 flex items-center gap-4">
            <Image src={post.author.profilePicture} alt="Author Profile Picture" width={48} height={448} className="rounded-md" />

            <div>
              <p className="text-white font-medium">{post.author.username}</p>
              <p className="text-white-desc text-sm">{DayJS(post.createdAt).format("D MMMM YYYY")}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};