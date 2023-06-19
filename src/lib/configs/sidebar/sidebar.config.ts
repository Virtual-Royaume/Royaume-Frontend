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
    title: "Mes projets",
    links: [
      {
        name: "Mes projets",
        href: "/"
      },
      {
        name: "Ajouter un projet",
        href: "/"
      }
    ]
  }
];