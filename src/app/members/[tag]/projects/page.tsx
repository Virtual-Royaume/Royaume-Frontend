"use client";

import { useContext, type ReactElement } from "react";
import { notFound } from "next/navigation";
import { MemberContext } from "../member-provider";
import { Heading } from "#/lib/components/atoms/texts/heading";
import Image from "next/image";

const MemberPage = (): ReactElement => {
  const member = useContext(MemberContext);
  if (!member) notFound();

  return (
    <div>
      {member.projects && member.projects.length > 0 ? (
        <div className="bg-background-gray-800 p-4 rounded">
          <div className="grid gap-1">
            {member.projects.map((project) => (
              <div key={project.name} className="text-gray-500 items-center gap-2">
                <div className="flex items-center gap-2">
                  <Heading type="h4" className="text-white text-lg">{project.name}</Heading>
                  <div className="px-2 pb-2 rounded bg-[#0c0c0d]">
                    {project.technologies && (
                      <div className="flex gap-2">
                        {project.technologies.map((technology) => (
                          <div key={technology.name} className="flex items-center gap-1 mt-2">
                            <Image src={`/images/icons/${technology.icon}`} alt={`${technology.name} Icon`} height={15} width={15} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="h-1 w-8 bg-primary-500 rounded mb-2" />
                <p className="text-gray-500">{project.description}</p>

                {project.images && (
                  <div className="flex gap-2">
                    {project.images.map((image) => (
                      <div key={project.name} className="flex items-center gap-1 mt-2">
                        <Image
                          src={`${image}`}
                          alt={`${project.name} Image`}
                          className="rounded w-full"
                          height={10}
                          width={1000} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-gray-500 flex items-center gap-2 border-l-4 border-l-danger-500 pl-2">
          <p>L&apos;utilisateur n&apos;a pas encore réalisé de projet ou n&apos;a pas encore publié ses projets.</p>
        </div>
      )}
    </div>
  );
};

export default MemberPage;