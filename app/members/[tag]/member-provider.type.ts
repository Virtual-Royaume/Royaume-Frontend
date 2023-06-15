import type { Member } from "@lib/configs/members/members.type";
import type { PropsWithChildren } from "react";

export type MemberProviderProps = PropsWithChildren & {
  member: Member;
};