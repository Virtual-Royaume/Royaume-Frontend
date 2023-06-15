import { Text } from "@lib/components/atoms/texts";
import { Heading } from "@lib/components/atoms/texts/heading";
import Image from "next/image";
import type { ReactElement } from "react";
import { LastPostSection } from "./_sections/last-post.section";
import { AllPostsSection } from "./_sections/all-posts.section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Découvrez de nuvelles technologies ou apprenez en sur l'actualité. Vous trouverez des posts réguliers rédigés par les soins de nos membres.",

  openGraph: {
    title: "Blog",
    description: "Découvrez de nuvelles technologies ou apprenez en sur l'actualité. Vous trouverez des posts réguliers rédigés par les soins de nos membres.",
  }
};

const HomePage = (): ReactElement => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-28">
        <div className="flex flex-col justify-center order-last lg:order-first">
          <Heading type="h1" className="font-bold uppercase">Blog</Heading>
          <Text>Découvrez de nuvelles technologies ou apprenez en sur l'actualité. Vous trouverez des posts réguliers rédigés par les soins de nos membres.</Text>
        </div>

        <div className="justify-self-start lg:justify-self-end relative">
          <div className="relative z-20 h-36 w-52 mb-4 lg:mb-0 lg:h-72 lg:w-96 lg:mr-16">
            <Image alt="crown" src="/images/crown.png" className="relative z-10 object-contain" fill />
          </div>
          <span className="absolute -top-32 right-0 h-[35rem] w-[35rem] rounded-full blur-3xl opacity-30 right-0 bg-purple rounded-full" />
        </div>
      </div>

      <div className="mt-28">
        <LastPostSection />
        <div className="w-full border-b my-14 lg:my-20 border-background-info" />
        <AllPostsSection />
      </div>
    </div>
  )
};

export default HomePage;