import type { ReactElement } from "react";
import type { Metadata } from "next";
import { Text } from "#/lib/components/atoms/texts";
import { Heading } from "#/lib/components/atoms/texts/heading";
import { LastPostSection } from "./_sections/last-post.section";
import { AllPostsSection } from "./_sections/all-posts.section";
import { Crown } from "../components/crown";

export const metadata: Metadata = {
  title: "Blog",
  description: [
    "Découvrez de nuvelles technologies ou apprenez en sur l'actualité.",
    "Vous trouverez des posts réguliers rédigés par les soins de nos membres."
  ].join(" "),

  openGraph: {
    title: "Blog",
    description: [
      "Découvrez de nuvelles technologies ou apprenez en sur l'actualité.",
      "Vous trouverez des posts réguliers rédigés par les soins de nos membres."
    ].join(" ")
  }
};

const HomePage = (): ReactElement => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-28">
        <div className="flex flex-col justify-center order-last lg:order-first">
          <Heading type="h1" className="font-bold uppercase">Blog</Heading>
          <Text>
            Découvrez de nuvelles technologies ou apprenez en sur l&apos;actualité. Vous trouverez des posts réguliers rédigés par les
            soins de nos membres.
          </Text>
        </div>

        <Crown />
      </div>

      <div className="mt-28">
        <LastPostSection />
        <div className="w-full border-b my-14 lg:my-20 border-background-info" />
        <AllPostsSection />
      </div>
    </div>
  );
};

export default HomePage;