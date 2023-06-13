import type { Member } from "@lib/configs/members/members.type";

export type MembersGaleryProps = {
  members: Member[];
  orientation: "left" | "right";
};