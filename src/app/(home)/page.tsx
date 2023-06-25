import type { ReactElement } from "react";
import { HeaderSection } from "./_sections/header.section";
import { TechnologiesSection } from "./_sections/technologies.section";
import { MembersSection } from "./_sections/members.section";

const HomePage = (): ReactElement => {
  return (
    <>
      <HeaderSection />
      <TechnologiesSection />
      <MembersSection />
    </>
  );
};

export default HomePage;