export type Member = {
  username: string;
  birthday: number | null;
  profilePicture: string;
  technologies: Techno[];
};

export type Techno = {
  name: string;
  icon: string;
};