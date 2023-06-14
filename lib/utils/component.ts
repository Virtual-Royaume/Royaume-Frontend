import { ReactElement } from "react";

export type Component<Props> = (props: Props) => ReactElement;

export type AsyncComponent<Props> = (props: Props) => Promise<ReactElement>;