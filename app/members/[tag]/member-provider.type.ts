import { Member } from "@lib/configs/members/members.type";
import { PropsWithChildren } from "react";

export type MemberProviderProps = PropsWithChildren & {
  member: Member;
};