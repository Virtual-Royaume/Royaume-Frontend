import type { ReactElement } from "react";
import { Heading } from "#/lib/components/atoms/texts/heading";
import Link from "next/link";

const MemberPage = (): ReactElement => {
  return (
    <div className="container">
      <Heading type="h1" className="font-bold">Ajouter un projet</Heading>

      <div className="flex justify-end mt-6">
        <Link href="/user/projects/add" className="btn bg-purple text-white hover:bg-purple-glow transition-colors duration-200 px-3 py-2 rounded">
          Liste des projets
        </Link>
      </div>
    </div>
  );
};

export default MemberPage;