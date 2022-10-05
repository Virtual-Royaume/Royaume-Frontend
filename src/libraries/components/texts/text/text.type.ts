export type TextType = "p" | "h4" | "h3" | "h2" | "h1";
export type TextSize = "small" | "normal" | "large" | "xl" | "2xl" | "3xl";
export type TextColor = "black" | "white" | "gray" | "red" | "primary";
export type FontWeight = "thin" | "light" | "normal" | "medium" | "bold";

type PrependNextNum<A extends Array<unknown>> = A['length'] extends infer T ? ((t: T, ...a: A) => void) extends ((...x: infer X) => void) ? X : never : never;
type EnumerateInternal<A extends Array<unknown>, N extends number> = { 0: A, 1: EnumerateInternal<PrependNextNum<A>, N> }[N extends A['length'] ? 0 : 1];
export type Enumerate<N extends number> = EnumerateInternal<[], N> extends (infer E)[] ? E : never;
export type Range<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>>;