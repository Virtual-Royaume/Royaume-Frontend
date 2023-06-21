import type { Member } from "#/lib/configs/member/member.type";

export type NavbarDropdownProps = {
  member: Member;
  logout: () => void;
};