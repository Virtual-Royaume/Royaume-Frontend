import type { ServerLoadEvent } from "@sveltejs/kit";
import { error } from '@sveltejs/kit';
import posts from '$lib/data/articles.json';
import slugToId from '$lib/utils/slug-to-id';
import { marked } from 'marked';
import { promises as fs } from 'node:fs'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const load = async ({ params }: ServerLoadEvent) => {
    const post = posts.find((post) => post.id === slugToId(params.slug ?? '0'));
    if (!post) {
        throw error(404, 'Not found')
    }

    const article = await (await fetch('https://raw.githubusercontent.com/Virtual-Royaume/Royaume-Website/7ad95c52dbdaa2ef8ee66bc6a0bdbc2a181d12ae/static/articles.md')).text();
    const content = marked.parse(article);

    return { post, content };
}