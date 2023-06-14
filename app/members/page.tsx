import type { ReactElement } from "react";
import { MemberCard } from "@lib/components/atomics/cards/member-card";
import { Text } from "@lib/components/atomics/texts";
import { Heading } from "@lib/components/atomics/texts/heading";
import { members } from "@lib/configs/members";
import Image from "next/image";

const MembersPage = (): ReactElement => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-28">
        <div className="flex flex-col justify-center order-last lg:order-first">
          <Heading type="h1" className="font-bold uppercase">Découvrez nos membres</Heading>
          <Text>Nos membres sont des personnes qui ont contribué aux projets ou juste des membres de la communauté.</Text>
        </div>

        <div className="justify-self-start lg:justify-self-end relative">
          <div className="relative z-20 h-36 w-52 lg:h-72 lg:w-96 lg:mr-16">
            <Image alt="crown" src="/images/crown.png" className="relative z-10 object-contain" fill />
          </div>
          <span className="absolute -top-32 right-0 h-[35rem] w-[35rem] rounded-full blur-3xl opacity-30 right-0 bg-purple rounded-full" />
        </div>
      </div>


      <div className="grid md:grid-cols-members-cards mt-10 gap-5">
        {members.sort((a, b) => a.username < b.username ? -1 : 1).map((member) => (
          <MemberCard key={member.username} {...member} />
        ))}
      </div>
    </div>
  )
};

export default MembersPage;