import { z } from "zod";

export const isString = (value: string | number | null, required: boolean): string => {
  if (typeof value === "string" && value.length === 0) value = null;
  if (!value && !required) return "";

  const parse = z.string().safeParse(value);
  return parse.success ? "" : parse.error.message;
}

export const isNumber = (value: string | number | null, required: boolean): string => {
  if (typeof value === "string" && typeof parseInt(value) === "number") value = parseInt(value);
  if (!value && !required) return "";

  const parse = z.number().safeParse(value);
  return parse.success ? "" : parse.error.message;
}

export const isEmail = (value: string | number | null, required: boolean): string => {
  if (typeof value === "string" && value.length === 0) value = null;
  if (!value && !required) return "";

  const parse = z.string().email().safeParse(value);
  return parse.success ? "" : parse.error.message;
}