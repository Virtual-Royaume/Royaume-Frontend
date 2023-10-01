export type SidebarProps = {
  sections: Section[];
}

export type Section = {
  title: string;
  links: Link[];
};

export type Link = {
  name: string;
  href: string;
  limited?: boolean;
};