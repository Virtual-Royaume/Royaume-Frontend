import { LinkButton } from "@lib/components/atomics/button/button";
import { Text } from "@lib/components/atomics/texts";
import { Heading } from "@lib/components/atomics/texts/heading";
import Image from "next/image";
import { ReactElement } from "react";
import { BsDiscord } from "react-icons/bs";

export const HeaderSection = (): ReactElement => {
  return (
    <header className="container grid grid-cols-1 lg:grid-cols-2 items-center mt-28">
      <div className="relative z-20 order-last lg:order-first">
        <Heading type="h1" className="uppercase font-extrabold">Le Royaume</Heading>
        <Text>Rejoignez notre communauté de développeurs talentueux ou devenez le !</Text>
        <LinkButton href="/register" className="mt-4">
          <BsDiscord />
          Rejoindre
        </LinkButton>
      </div>
      <div className="justify-self-start lg:justify-self-end relative">
        <div className="relative z-20 h-36 w-52 lg:h-72 lg:w-96">
          <Image alt="crown" src="/images/crown.png" className="relative z-10 object-contain" fill />
        </div>
        <span className="absolute -top-32 right-0 h-[35rem] w-[35rem] rounded-full blur-3xl opacity-30 right-0 bg-purple rounded-full" />
      </div>
    </header>
  );
}