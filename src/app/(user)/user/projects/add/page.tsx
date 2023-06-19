import { Heading } from "#/lib/components/atoms/texts/heading";
import type { ReactElement } from "react";
import Link from "next/link";

const MemberPage = (): ReactElement => {
  return (
    <div className="container">
      <div className="flex justify-between mt-4">
        <div>
          <Heading type="h3">Ajouter un nouveau projet</Heading>
        </div>

        <div>
          <Link href="/user/projects" className="btn bg-purple text-white hover:bg-purple-glow transition-colors duration-200 px-3 py-2 rounded">
            Liste des projets
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;