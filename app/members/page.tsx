import { MemberCard } from "@lib/components/atomics/cards/member-card";
import { Text } from "@lib/components/atomics/texts";
import { members } from "@lib/configs/members";
import { ReactElement } from "react";

const MembersPage = (): ReactElement => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20">
        <Text about="h1" className="text-3xl font-semibold">Découvrez nos membres</Text>
        <Text about="p" className="text-white-desc text-center mt-4">Nos membres sont des personnes qui ont contribué au projets, ou juste des membres de la communauté.</Text>
      </div>

      <div className="flex flex-wrap justify-center mt-10 gap-5">
        {members.map((member) => (
          <MemberCard birthday={member.birthday} image={member.profilePicture} username={member.username} />
        ))}
      </div>
    </>
  )
};

export default MembersPage;