"use client";

import { useContext, type ReactElement } from "react";
import { notFound } from "next/navigation";
import { MemberContext } from "../member-provider";

const MemberPage = (): ReactElement => {
  const member = useContext(MemberContext);
  if (!member) notFound();

  return (
    <div className="grid lg:grid-cols-[1fr_20rem] gap-10">
      <p className="text-white-desc text-opacity-50">
        Cette page n&apos;est pas encore implémentée.
      </p>
    </div>
  );
};

export default MemberPage;