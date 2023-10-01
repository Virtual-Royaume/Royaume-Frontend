import type { ReactElement } from "react";
import { Heading } from "#/lib/components/atoms/texts/heading";

const MemberPage = (): ReactElement => {
  return (
    <div className="container">
      <Heading type="h1" className="font-bold">Mes projets</Heading>
    </div>
  );
};

export default MemberPage;