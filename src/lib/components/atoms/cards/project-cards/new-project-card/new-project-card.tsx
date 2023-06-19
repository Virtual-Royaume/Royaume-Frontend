import type { ReactElement } from "react";
import { BsPlus } from "react-icons/bs";
import { s } from "#/lib/utils/style/class";

export const NewProjectCard = (): ReactElement => {
  return (
    <div className={s(
      "bg-background-card hover:bg-background-card-hover p-10",
      "rounded border-2 border-dashed border-background-card-hover hover:border-background-card transition-all duration-200"
    )}>
      <>
        <div className="items-center gap-2">
          <p className="text-white-desc text-opacity-50 text-center">
            <BsPlus className="inline-block" /> Ajouter un nouveau projet
          </p>
        </div>
      </>
    </div>
  );
};