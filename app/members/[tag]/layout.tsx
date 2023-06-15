import type { AsyncComponent } from "@lib/utils/component";
import type { MemberLayoutProps } from "./layout.type";
import { notFound } from "next/navigation";
import { DayJS } from "@lib/utils/day-js";
import { Member } from "@lib/configs/members/members.type";
import { Heading } from "@lib/components/atoms/texts/heading";
import { Text } from "@lib/components/atoms/texts";
import { members } from "@lib/configs/members";
import { MemberProvider } from "./member-provider";
import { LittleNavbar } from "@lib/components/atoms/little-navbar";
import { Link } from "@lib/components/atoms/little-navbar/little-navbar.type";
import { BsDiscord, BsGithub, BsLink45Deg, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { Metadata } from "next";
import { Button } from "@lib/components/atoms/button/cta";
import Image from "next/image";

const getMember = async (tag: string): Promise<Member | null> => {
  return members.find((member) => member.tag === tag) ?? null;
};

export const generateMetadata = async ({ params }: MemberLayoutProps): Promise<Metadata> => {
  const member = await getMember(params.tag);
  if (!member) notFound();

  return {
    title: member.username,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora enim alias at minus sint dignissimos quo maxime praesentium nesciunt, hic quod nobis quia quaerat culpa magni, ex animi libero quam? Itaque pariatur soluta ea, quod illo sit, omnis iusto consectetur ipsa sequi ipsum fugit totam doloribus ab quos magni facilis repudiandae eos?",
    openGraph: {
      title: member.username,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora enim alias at minus sint dignissimos quo maxime praesentium nesciunt, hic quod nobis quia quaerat culpa magni, ex animi libero quam? Itaque pariatur soluta ea, quod illo sit, omnis iusto consectetur ipsa sequi ipsum fugit totam doloribus ab quos magni facilis repudiandae eos?",
      images: [member.profilePicture]
    }
  };
};

const MemberLayout: AsyncComponent<MemberLayoutProps> = async ({ params, children }) => {
  const member = await getMember(params.tag);
  if (!member) notFound();

  const links: Link[] = [
    {
      name: "A propos",
      href: `/members/${member.tag}`
    },
    {
      name: "Mes projets",
      href: `/members/${member.tag}/projects`
    },
    {
      name: "Activité",
      href: `/members/${member.tag}/activities`
    }
  ];

  return (
    <div className="container mt-28">
      {DayJS(member.birthday).day() === DayJS().day() && DayJS(member.birthday).month() === DayJS().month() && (
        <div className="absolute left-0 right-0 -top-64 h-[100rem] w-screen opacity-10">
          <Image src="/images/garlands.png" alt="Birthday garlands" fill className="object-contain" />
        </div>
      )}

      <div className="relative z-20 flex flex-col lg:flex-row gap-10">
        <div className="relative aspect-square w-fit h-44 mx-auto lg:mx-0">
          <Image src={member.profilePicture} alt={`${member.tag} profile picture`} className="rounded-md" fill />
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <Heading type="h1" className="font-bold">{member.username}</Heading>
            {member.birthday && (
              <div className="flex items-center gap-2 mt-1">
                <Text>{DayJS().diff(member.birthday, "year", false)} ans</Text>
                <Text>·</Text>
                <Text>{DayJS(member.birthday).format("D MMMM YYYY")}</Text>
              </div>
            )}
          </div>

          {member.technologies.length > 0 && (
            <div className="bottom-0 h-6 w-full rounded-md flex items-center gap-2">
              {member.technologies.map((techno) => (
                <div className="relative aspect-square h-5">
                  <Image src={`/images/icons/${techno.icon}`} alt={`${techno.name} Icon`} fill className="object-contain" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-16">
        <LittleNavbar links={links} />

        <div className="grid lg:grid-cols-[1fr_20rem] gap-10 mt-4">
          <MemberProvider member={member}>
            {children}
          </MemberProvider>

          <div>
            <div className="bg-background-card p-4 rounded-md">
              <p className="text-white font-medium text-lg">Me contacter</p>
              <div className="h-1 w-8 bg-purple rounded-md" />

              <div className="mt-3 grid gap-1">
                {member.socials && member.socials.map((social) => (
                  <div>
                    <p className="text-white-desc flex items-center gap-2">
                      {social.type === "discord" && (
                        <BsDiscord />
                      ) || social.type === "twitter" && (
                        <BsTwitter />
                      ) || social.type === "linkedin" && (
                        <BsLinkedin />
                      ) || social.type === "github" && (
                        <BsGithub />
                      ) || social.type === "website" && (
                        <BsLink45Deg />
                      )}

                      <a href={social.url} target="_blank" rel="noopener noreferrer">{social.username}</a>
                    </p>
                  </div>
                )) || (
                  <p className="text-white-desc">{member.username} n'a renseigné aucun de ses réseaux sociaux</p>
                )}

                {member.canBeContacted && (
                  <div>
                    <hr className="border-white border-opacity-10 border-t-1" />
                    <div className="mt-3 grid gap-1">
                      <Button className="w-full justify-center">
                        <FaPaperPlane />
                        Envoyer un message
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberLayout;