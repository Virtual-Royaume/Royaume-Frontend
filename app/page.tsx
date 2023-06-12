import { ReactElement } from "react";
import { HeaderSection } from "./sections/header.section";
import { SpecialitiesSection } from "./sections/specialities.section";
import { MembersSection } from "./sections/members.section";

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