import type { ServerLoadEvent } from "@sveltejs/kit";

export const load = ({ locals }: ServerLoadEvent) => {
    return {
        user: locals.user
    }
}