import { redirect } from "@sveltejs/kit";

export function GET(): Response {
  throw redirect(302, "https://discord.gg/RxTN8tFUQH");
}