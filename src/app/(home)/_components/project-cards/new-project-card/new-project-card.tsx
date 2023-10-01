import type { ReactElement } from "react";
import { BsPlus } from "react-icons/bs";
import { s } from "#/lib/utils/style/class";

export const NewProjectCard = (): ReactElement => {
  return (
    <div className={s(
      "bg-gray-800 hover:bg-gray-700 p-10",
      "rounded border-2 border-dashed border-gray-700 hover:border-gray-800 transition-all duration-200"
    )}>
      <>
        <div className="items-center gap-2">
          <p className="text-gray-500 text-opacity-50 text-center">
            <BsPlus className="inline-block" /> Ajouter un nouveau projet
          </p>
        </div>
      </>
    </div>
  );
};