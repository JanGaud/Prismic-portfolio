export const prerender = 'auto';

import { createClient } from '$lib/prismicio'
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
    const client = createClient({ fetch })
    const nav = await client.getSingle('nav')
    const footer = await client.getSingle('footer')
    const social = await client.getSingle('social_navigation')

    if (nav && footer) {
        return { nav, footer, social }
    }

    error(404, 'Not found')
}