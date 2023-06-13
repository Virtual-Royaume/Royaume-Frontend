import type { ReactElement } from "react";
import { HeaderSection } from "./_sections/header.section";
import { SpecialitiesSection } from "./_sections/specialities.section";
import { MembersSection } from "./_sections/members.section";

const HomePage = (): ReactElement => {
  return (
    <>
      <HeaderSection />
      <SpecialitiesSection />
      <MembersSection />
    </>
  )
};

export default HomePage;