import type { LinkProps } from "next/link";
import type { HTMLAttributes, PropsWithChildren } from "react";

export type LinkButtonProps = PropsWithChildren & LinkProps & HTMLAttributes<HTMLAnchorElement>;