<script>
    import { PrismicImage, PrismicLink } from '@prismicio/svelte';

    // Props for navigation data
    /** @type {import('../../prismicio-types').NavDocumentData["links"]} */
    export let links;

    // Prop for brand data
    /** @type {import('../../prismicio-types').NavDocumentData["brand"]} */
    export let brand;
</script>

<nav class="fixed top-0 w-full z-50 text-white flex justify-between items-center px-10 pt-2">
    <div>
		<a class="drop-shadow-xl" href="/"><PrismicImage width="100" field={brand[0]?.logo} /></a>
    </div>
    <ul class="w-fit flex items-end justify-end gap-10 px-6 py-2 backdrop-blur-md rounded-2xl">
        {#each links as link}
            <li class="hover:text-third hover:border-b-third border-b-2 transition-colors">
                <PrismicLink field={link.link}>
                    {link.label}
                </PrismicLink>
            </li>
        {/each}
    </ul>
</nav>
