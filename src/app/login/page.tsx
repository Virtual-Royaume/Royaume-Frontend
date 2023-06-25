import type { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/texts";
import { Heading } from "#/lib/components/atoms/texts/heading";
import { BsDiscord } from "react-icons/bs";
import Image from "next/image";

// TODO for: @RomainSav

const MembersPage = (): ReactElement => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-28">
        <div className="flex flex-col justify-center order-last lg:order-first">
          <Heading type="h1" className="font-bold uppercase">Se connecter</Heading>
          <Text>Connectez-vous pour pouvoir ajouter des projets, modifier votre profil, etc.</Text>
        </div>

        <div className="justify-self-start lg:justify-self-end relative">
          <div className="relative z-20 h-36 w-52 mb-4 lg:mb-0 lg:h-72 lg:w-96 lg:mr-16">
            <Image alt="crown" src="/images/crown.png" className="relative z-10 object-contain" fill />
          </div>
          <span className="absolute -top-32 right-0 h-[35rem] w-[35rem] rounded-full blur-3xl opacity-30 right-0 bg-primary-500 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-12">
        <div className="px-1 py-6 rounded flex flex-col items-center w-80">
          <button className="bg-external-discord rounded px-4 py-2 flex items-center space-x-2 text-white gap-3">
            <BsDiscord />
            Se connecter avec Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;