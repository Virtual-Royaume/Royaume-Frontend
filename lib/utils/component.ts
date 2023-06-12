import { ReactElement } from "react";

export type Component<Props> = (props: Props) => ReactElement;