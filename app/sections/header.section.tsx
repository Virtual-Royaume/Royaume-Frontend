import { LinkButton } from "@lib/components/atomics/button/button";
import Image from "next/image";
import { ReactElement } from "react";
import { BsDiscord } from "react-icons/bs";

export const HeaderSection = (): ReactElement => {
  return (
    <header>
      <div>
        <h1 className="uppercase">Le Royaume</h1>
        <p>Rejoignez notre communauté de développeurs talentueux ou devenez le !</p>
        <LinkButton href="/register"><BsDiscord /> Rejoindre</LinkButton>
      </div>
      <div>
        <Image alt="crown" src="/images/crown.png" height={500} width={500} />
      </div>
    </header>
  );
}