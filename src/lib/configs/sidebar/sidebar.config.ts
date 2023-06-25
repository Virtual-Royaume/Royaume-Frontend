import type { Section } from "./sidebar.type";

export const links: Section[] = [
  {
    title: "Mon compte",
    links: [
      {
        name: "Modifier le profil",
        href: "/user"
      }
    ]
  },
  {
    title: "Blog",
    links: [
      {
        name: "Mes articles",
        href: "/"
      },
      {
        name: "Examen des articles",
        href: "/",
        limited: true
      }
    ]
  },
  {
    title: "Projets",
    links: [
      {
        name: "Mes projets",
        href: "/user/projects"
      },
      {
        name: "Ajouter un projet",
        href: "/user/projects/add"
      }
    ]
  },
  {
    title: "Messagerie privée",
    links: [
      {
        name: "Mes messages non lus",
        href: "/"
      },
      {
        name: "Mes messages lus",
        href: "/"
      },
      {
        name: "Envoyer un message",
        href: "/"
      }
    ]
  }
];