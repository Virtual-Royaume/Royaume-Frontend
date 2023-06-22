"use client";

import type { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/texts";
import { Heading } from "#/lib/components/atoms/texts/heading";
import { MembersGrid } from "./members-grid";
import { Crown } from "#/app/(home)/components/crown";

const MembersPage = (): ReactElement => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-28">
        <div className="flex flex-col justify-center order-last lg:order-first">
          <Heading type="h1" className="font-bold uppercase">Découvrez nos membres</Heading>
          <Text>Nos membres sont des personnes qui ont contribué aux projets ou bien des membres de la communauté.</Text>
        </div>

        <Crown />
      </div>

      <MembersGrid />
    </div>
  );
};

export default MembersPage;