import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

import posts from '$lib/data/articles.json';
import slugToId from '$lib/utils/slug-to-id';

export const load: PageServerLoad = async ({ params }) => {
    const post = posts.find((post) => post.id === slugToId(<string>params.slug));
    if (!post) {
        throw error(404, 'Not found')
    }

    return { post };
};