import type { Tuple } from "#/lib/utils/typing";
import type { Dispatch, SetStateAction } from "react";

export type UseDisableScrollHook = (elementId: string, disableState: boolean) => Tuple<boolean, Dispatch<SetStateAction<boolean>>>;