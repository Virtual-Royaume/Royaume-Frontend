import type { ReactElement } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { Text } from "#/lib/components/atoms/texts";
import { clsx } from "clsx";

export const NewProjectCard = (): ReactElement => {
  return (
    <div className={clsx(
      "bg-background-card hover:bg-background-card-hover p-10",
      "rounded border-2 border-dashed border-background-card-hover hover:border-background-card transition-all duration-200",
      "cursor-pointer"
    )}>
      <>
        <div className="items-center gap-2">
          <Text className="text-white-desc text-opacity-50 text-center select-none">
            <BsPencilSquare className="inline-block" /> Écrire un nouvel article
          </Text>
        </div>
      </>
    </div>
  );
};