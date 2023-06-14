import { PropsWithChildren } from "react";

export type MemberLayoutProps = PropsWithChildren & {
  params: MemberLayoutParams;
};

type MemberLayoutParams = {
  tag: string;
};