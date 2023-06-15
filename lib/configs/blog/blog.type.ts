import { Member } from "../members/members.type";

export type BlogPost = {
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
  author: Member;
  createdAt: Date;
};