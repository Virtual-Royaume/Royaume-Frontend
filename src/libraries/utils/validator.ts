import { z } from "zod";

export const isString = (value: unknown): boolean => {
  return z.string().safeParse(value).success;
}

export const isNumber = (value: unknown): boolean => {
  return z.number().safeParse(value).success;
}