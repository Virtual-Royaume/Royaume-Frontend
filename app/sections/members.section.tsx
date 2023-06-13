import { StatsCard } from "@lib/components/atomics/cards/stats-card";
import { MembersGalery } from "@lib/components/atomics/members-galery";
import { Text } from "@lib/components/atomics/texts";
import { Heading } from "@lib/components/atomics/texts/heading";
import { members } from "@lib/configs/members";
import Image from "next/image";
import { ReactElement } from "react";

export const MembersSection = (): ReactElement => {
  return (
    <section className="relative mt-44 py-8">
      <div className="container absolute text-center z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
        <Heading type="h2" className="uppercase font-bold">Nos membres</Heading>
        <Text className="mt-2">
          Découvrez ceux qui font vivre notre communauté de jour en jour !
        </Text>

        <div className="flex flex-wrap gap-8 mt-12 justify-center">
          <StatsCard title="300" description="Membres" />
          <StatsCard title="1,31 M" description="Messages" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <MembersGalery members={members} orientation="left" />
        <MembersGalery members={members} orientation="right" />
        <MembersGalery members={members} orientation="left" />
        <MembersGalery members={members} orientation="right" />
        <MembersGalery members={members} orientation="left" />
        <MembersGalery members={members} orientation="right" />
        <MembersGalery members={members} orientation="left" />
      </div>
    </section>
  );
};