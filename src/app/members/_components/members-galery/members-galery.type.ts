import type { Member } from "#/lib/configs/member/member.type";

export type MembersGaleryProps = {
  members: Member[];
  orientation: "left" | "right";
};