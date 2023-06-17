import type { Component } from "#/lib/utils/component";
import type { MemberEditionLayoutProps } from "./layout.type";
import type { Link } from "#/lib/components/atoms/little-navbar/little-navbar.type";
import { DayJS } from "#/lib/utils/day-js";
import { Heading } from "#/lib/components/atoms/texts/heading";
import { Text } from "#/lib/components/atoms/texts";
import { members } from "#/lib/configs/members";
import { LittleNavbar } from "#/lib/components/atoms/little-navbar";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import clsx from "clsx";

const MemberLayout: Component<MemberEditionLayoutProps> = ({ children }) => {
  const member = members[4];

  const links: Link[] = [
    {
      name: "A propos",
      href: "/user"
    },
    {
      name: "Mes projets",
      href: "/user/projects"
    },
    {
      name: "Articles",
      href: "/user/articles"
    },
    {
      name: "Liens",
      href: "/user/links"
    }
  ];

  type Message = {
    author: number;
    content: string;
    date: number;
  }

  const lastMessages: Message[] = [
    { author: 1, content: [
      "Je suis en train de faire une nouvelle fonctionnalité sur le site et j'ai",
      "besoins d'un développeur talentueux qui pourrait répondre à mon besoin ainsi qu'à mes attentes."].join(" "), date: 1387906920000 },
    { author: 29, content: [
      "Salut ceci est une invitation pour intégrer le salon de l'ingénieurie qui ce déroulera le 12 octobre",
      "2021 à 14h00 à l'ENSIIE de Strasbourg. Répond moi si tu es intéressé."].join(" "), date: 1365003720000 },
    { author: 36, content: [
      "Ceci est un message de test pour voir si le système de message fonctionne correctement.",
      "Si tu reçois ce message c'est que tout fonctionne correctement."].join(" "), date: 1160667720000 },
    { author: 1, content: [
      "Je suis en train de faire une nouvelle fonctionnalité sur le site et j'ai",
      "besoins d'un développeur talentueux qui pourrait répondre à mon besoin ainsi qu'à mes attentes."].join(" "), date: 1387906920000 },
    { author: 29, content: [
      "Salut ceci est une invitation pour intégrer le salon de l'ingénieurie qui ce déroulera le 12 octobre",
      "2021 à 14h00 à l'ENSIIE de Strasbourg. Répond moi si tu es intéressé."].join(" "), date: 1365003720000 },
    { author: 36, content: [
      "Ceci est un message de test pour voir si le système de message fonctionne correctement.",
      "Si tu reçois ce message c'est que tout fonctionne correctement."].join(" "), date: 1160667720000 }
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
          <Image src={member.profilePicture} alt={`${member.tag} profile picture`} className="rounded" fill />
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <Heading type="h1" className="font-bold">{member.username}</Heading>
            {member.birthday && (
              <div className="flex items-center gap-2 mt-1 text-white-desc">
                <Text>{DayJS().diff(member.birthday, "year", false)} ans</Text>
                <Text>·</Text>
                <Text>{DayJS(member.birthday).format("D MMMM YYYY")}</Text>
              </div>
            )}
          </div>

          {member.technologies.length > 0 && (
            <div className="bottom-0 h-6 w-full rounded flex items-center gap-2">
              {member.technologies.map((techno) => (
                <div key={techno.name} className="relative aspect-square h-5">
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
          {children}

          <div>
            <div className="bg-background-card p-4 rounded">
              <p className="text-white font-medium text-lg">Messagerie</p>
              <div className="h-1 w-8 bg-purple rounded" />

              <div className="mt-3 grid gap-1">
                {lastMessages && lastMessages.length > 0 && lastMessages.slice(0, 3).map((msg) => (
                  <div key={msg.date} className="flex gap-2 hover:bg-background-card-hover rounded p-2">
                    <div className="relative aspect-square h-10">
                      <Image
                        src={members[msg.author].profilePicture}
                        alt={`${members[msg.author].tag} profile picture`}
                        fill
                        className="object-contain rounded"
                      />
                    </div>

                    <div className="flex flex-col">
                      <div>
                        <div className="flex items-center gap-1">
                          <Text className="text-white font-medium">
                            {members[msg.author].username}
                          </Text>

                          <Text className="text-white-desc text-opacity-50">
                            {DayJS(msg.date).format("DD MMMM")}
                          </Text>

                          {msg.author === 1 && (
                            <span className="bg-purple text-white text-sm rounded-full flex items-center justify-center p-2 w-4 h-4">
                              1
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-white-desc -mt-1 line-clamp-1">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {lastMessages.length === 0 && (
                  <p className="text-white-desc">
                    Vous n&apos;avez pas encore de messages dans votre boîte de réception.
                  </p>
                ) || (lastMessages.slice(0, 3).length - 3) > 0 && (
                  <div className={clsx(
                    "flex items-center justify-between text-white-desc opacity-50 hover:opacity-100 hover:bg-background-card-hover rounded p-2"
                  )}>
                    Voir les autres messages ({lastMessages.length - 3})
                    <BsArrowRight />
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