export const prerender = 'auto';

import { createClient } from '$lib/prismicio'
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
    const client = createClient({ fetch })
    const nav = await client.getSingle('nav')

    if (nav) {
        return { nav }
    }

    error(404, 'Not found')
}