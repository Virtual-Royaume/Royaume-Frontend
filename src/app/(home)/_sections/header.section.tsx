import type { ReactElement } from "react";
import { BsDiscord } from "react-icons/bs";
import { LinkButton } from "#/lib/components/atoms/button/link/link";
import { Text } from "#/lib/components/atoms/texts";
import { Heading } from "#/lib/components/atoms/texts/heading";
import { Crown } from "#/app/(home)/components/crown";

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

      <Crown />
    </header>
  );
};