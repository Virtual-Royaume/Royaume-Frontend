import type { Member } from "../member/member.type";

export type BlogPost = {
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
  author: Member;
  createdAt: Date;
};