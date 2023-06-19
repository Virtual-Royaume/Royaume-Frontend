import { Heading } from "#/lib/components/atoms/texts/heading";
import type { ReactElement } from "react";
import Link from "next/link";

const MemberPage = (): ReactElement => {
  return (
    <div className="container mt-4">
      <div className="flex justify-between">
        <div>
          <Heading type="h3">Vos projets</Heading>
        </div>

        <div>
          <Link href="/user/projects/add" className="btn bg-purple text-white hover:bg-purple-glow transition-colors duration-200 px-3 py-2 rounded">
            Ajouter un projet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;