import type { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/texts";
import { Heading } from "#/lib/components/atoms/texts/heading";
import { specialities } from "#/lib/configs/speciality";
import { TechnoCard } from "../_components/techno-card";

export const TechnologiesSection = (): ReactElement => {
  return (
    <section className="container mt-44">
      <div className="flex flex-col items-center">
        <Heading type="h2" className="uppercase font-bold text-center">Découvrez nos spécialités</Heading>
        <Text className="mt-2 max-w-3xl text-center">
          Voici ce que nous savons faire de mieux chez nous. Vous ne connaissez pas ces technologies ? Ce n&apos;est pas un soucis,
          nous sommes la pour vous apprendre !
        </Text>
      </div>

      <div className="relative">
        <div className="relative z-10 flex flex-wrap gap-12 justify-center mt-16">
          {specialities.map((speciality) => (
            <TechnoCard key={speciality.title} {...speciality} />
          ))}
        </div>

        <span className="absolute left-0 top-0 h-96 w-96 max-w-full rounded-full blur-3xl opacity-30 bg-purple rounded-full" />
      </div>
    </section>
  );
};