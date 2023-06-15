import { BsPlus } from "react-icons/bs";

export const NewProjectCard = () => {
  return (
    <div className="bg-background-card hover:bg-background-card-hover p-10 rounded-md border-2 border-dashed border-background-card-hover hover:border-background-card transition-all duration-200">
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