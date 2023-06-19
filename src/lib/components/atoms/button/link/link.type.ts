import type { LinkProps } from "next/link";
import type { ComponentPropsWithRef } from "react";

export type LinkButtonProps = LinkProps & ComponentPropsWithRef<"a">;