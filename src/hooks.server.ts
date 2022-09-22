import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.user = {
        username: 'RomainSav',
        email: 'romainsav@royaume.world',
        avatar: 'https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png'
    };

    return await resolve(event);
}

