import type { ReactElement } from "react";
import { MemberCard } from "@lib/components/atomics/cards/member-card";
import { Text } from "@lib/components/atomics/texts";
import { Heading } from "@lib/components/atomics/texts/heading";
import { members } from "@lib/configs/members";

const MembersPage = (): ReactElement => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center mt-20">
        <Heading type="h1" className="px-2 text-center font-bold">Découvrez nos membres</Heading>
        <Text className="px-2 text-center">Nos membres sont des personnes qui ont contribué au projets, ou juste des membres de la communauté.</Text>
      </div>

      <div className="grid grid-cols-members-cards mt-10 gap-5">
        {members.map((member) => (
          <MemberCard key={member.username} {...member} />
        ))}
      </div>
    </div>
  )
};

export default MembersPage;