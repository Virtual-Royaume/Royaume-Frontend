import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const s = clsx;

export const sm = (...classes: ClassValue[]): string => twMerge(s(classes));