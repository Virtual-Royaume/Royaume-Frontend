import { Heading } from "#/lib/components/atoms/texts/heading";
import type { ReactElement } from "react";

const MemberPage = (): ReactElement => {
  return (
    <div className="container">
      <Heading type="h1" className="font-bold">Modifier le profil</Heading>
    </div>
  );
};

export default MemberPage;