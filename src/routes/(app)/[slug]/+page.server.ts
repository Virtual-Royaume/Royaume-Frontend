import type { ServerLoadEvent } from "@sveltejs/kit";
import { error } from '@sveltejs/kit';
import posts from '$lib/data/articles.json';
import comments from '$lib/data/comments.json';
import slugToId from '$lib/utils/slug-to-id';
import { marked } from 'marked';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const load = async ({ params, locals }: ServerLoadEvent) => {
    const post = posts.find((post) => post.id === slugToId(params.slug ?? '0'));
    if (!post) {
        throw error(404, 'Not found')
    }

    const article = await (await fetch(`https://raw.githubusercontent.com/Virtual-Royaume/Royaume-Website/blog/articles/${post.id}.md`)).text();
    const content = marked.parse(article);

    return { post, content, user: locals.user, comments };
}