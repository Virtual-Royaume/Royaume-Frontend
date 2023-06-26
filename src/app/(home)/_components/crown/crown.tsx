import Image from "next/image";
import type { ReactElement } from "react";

export const Crown = (): ReactElement => {
  return (
    <div className="justify-self-start lg:justify-self-end relative">
      <div className="relative z-20 h-36 w-52 mb-4 lg:mb-0 lg:h-72 lg:w-96 lg:mr-16">
        <Image alt="crown" src="/images/crown.png" className="relative z-10 object-contain" fill />
      </div>
      <span className="absolute z-[-1] -top-32 right-0 h-[35rem] w-[35rem] rounded-full blur-3xl opacity-30 right-0 bg-primary-500 rounded-full" />
    </div>
  );
};