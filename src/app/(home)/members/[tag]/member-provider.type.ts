import type { Member } from "#/lib/configs/member/member.type";
import type { PropsWithChildren } from "react";

export type MemberProviderProps = PropsWithChildren & {
  member: Member;
};