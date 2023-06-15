export type Member = {
  tag: string;
  username: string;
  birthday: number | null;
  profilePicture: string;
  technologies: Techno[];
  location?: string;
  projects?: Projects[];
  socials?: Social[];
  canBeContacted?: boolean;
};

export type Techno = {
  name: string;
  icon: string;
};

export type Social = {
  type: "discord" | "github" | "linkedin" | "twitter" | "website";
  username: string;
  url: string;
};

export type Projects = {
  name: string;
  description: string;
  technologies?: Techno[];
  repository?: string;
  images?: string[];
};