"use client";

import { Text } from "@lib/components/atomics/texts";
import { useContext, type ReactElement } from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { notFound } from "next/navigation";
import { MemberContext } from "./member-provider";

const MemberPage = (): ReactElement => {
  const member = useContext(MemberContext);
  if (!member) notFound();

  return (
    <div className="grid grid-cols-[1fr_20rem] gap-10">
      <div>
        <div className="bg-background-card p-4 rounded-md">
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora enim alias at minus sint dignissimos quo maxime praesentium nesciunt, hic quod nobis quia quaerat culpa magni, ex animi libero quam? Itaque pariatur soluta ea, quod illo sit, omnis iusto consectetur ipsa sequi ipsum fugit totam doloribus ab quos magni facilis repudiandae eos? Tempora commodi voluptatibus earum, minus alias esse obcaecati totam fugit. Repellendus quae veniam corrupti, magnam quaerat doloribus pariatur sit eum illo modi, quo ratione vero eos nesciunt id ipsum maiores? Harum fugit ut aspernatur dolores, reiciendis consequuntur maxime sapiente consectetur eius odit adipisci accusantium, ea dolorum nobis, quis dolore qui velit sunt fugiat. Ducimus sapiente quibusdam veritatis, incidunt maiores alias minima autem ipsum obcaecati? Reiciendis sit eos hic rem ullam rerum necessitatibus ratione sint iste? Nesciunt, laborum doloremque dolores dolor voluptatem in a quo quibusdam voluptas iusto corrupti cum magnam quasi, consequatur alias recusandae iste, obcaecati placeat sint inventore optio aut laboriosam quas. Sequi officia accusantium rem, quod sint nihil sunt! Enim dolore at, quos ad nam dolor, nobis ab hic, exercitationem quod quis saepe laborum sequi esse nisi. Fugiat error libero dolorum odio recusandae est incidunt numquam laboriosam ex at beatae excepturi cumque hic eligendi magni ratione repellendus id exercitationem, aspernatur sed quis eaque quam aliquam. Ipsa dignissimos, recusandae ipsam ipsum quae delectus ratione temporibus iusto, non ex quis earum eum vel qui. Velit accusamus veritatis voluptates enim pariatur laborum iste illum quam, molestiae nam eum temporibus mollitia ab nulla, ad in itaque delectus harum commodi et laboriosam cum. Amet ratione illum quo accusamus. Corrupti, numquam omnis. Blanditiis repellendus maiores saepe impedit! Aperiam, a voluptatum, commodi quas delectus perferendis laboriosam eveniet quidem recusandae id eaque? Earum, nemo quae repellat eligendi maiores voluptatibus doloremque ratione saepe illo laudantium a iure cumque optio! Sequi ea sapiente fugit eius corporis?
          </Text>
        </div>
      </div>
      <div>
        <div className="bg-background-card p-4 rounded-md">
          <p className="text-white font-medium text-lg">Me contacter</p>
          <div className="h-1 w-8 bg-purple rounded-md" />

          <div className="mt-3 grid gap-1">
            <div className="text-white-desc flex items-center gap-2">
              <AiOutlineGithub className="h-5 w-5" />
              <p>{member.tag}</p>
            </div>

            <div className="text-white-desc flex items-center gap-2">
              <AiOutlineLinkedin className="h-5 w-5" />
              <p>{member.tag}</p>
            </div>

            <div className="text-white-desc flex items-center gap-2">
              <AiOutlineTwitter className="h-5 w-5" />
              <p>{member.tag}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;