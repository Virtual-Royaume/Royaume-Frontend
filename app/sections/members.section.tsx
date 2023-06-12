import { StatsCard } from "@lib/components/atomics/cards/stats-card";
import { Text } from "@lib/components/atomics/texts";
import { Heading } from "@lib/components/atomics/texts/heading";
import { members } from "@lib/configs/members";
import Image from "next/image";
import { ReactElement } from "react";

export const MembersSection = (): ReactElement => {
  return (
    <section className="relative mt-44 py-4">
      <div className="absolute text-center z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Heading type="h2" className="uppercase font-bold">Nos membres</Heading>
        <Text className="mt-2">
          Découvrez ceux qui font vivre notre communauté de jour en jour !
        </Text>

        <div className="flex gap-8 mt-12 justify-center">
          <StatsCard title="300" description="Membres" />
          <StatsCard title="1,31 M" description="Messages" />
        </div>
      </div>

      <div className="grid [grid-area:stack] grid-cols-[repeat(24,1fr)] gap-4 opacity-10">
        {members.map((member) => (
          <div key={member.profilePicture} className="odd:translate-y-4 even:-translate-y-4 flex-col justify-center gap-1">
            <Image src={member.profilePicture} alt="Member Profile Picture" width={80} height={80} className="rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
};