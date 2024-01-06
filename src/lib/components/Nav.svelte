<script>
    import { PrismicImage, PrismicLink } from '@prismicio/svelte';

    // Props for navigation data
    /** @type {import('../../prismicio-types').NavDocumentData["links"]} */
    export let links;

    // Prop for brand data
    /** @type {import('../../prismicio-types').NavDocumentData["brand"]} */
    export let brand;

    let isMobileMenuOpen = false;

    // Function to toggle the body's overflow
    function toggleBodyScroll(open) {
        document.body.style.overflow = open ? 'hidden' : '';
    }

    // Update body scroll when isMobileMenuOpen changes
    $: toggleBodyScroll(isMobileMenuOpen);
</script>

<nav class="fixed top-0 w-full z-50 text-white flex justify-between items-center pl-10 pr-7 pt-2">
    <div>
        <a class="drop-shadow-xl" href="/"><PrismicImage width="100" field={brand[0]?.logo} /></a>
    </div>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex w-fit items-end justify-end gap-10 px-6 py-2 backdrop-blur-md rounded-2xl">
        {#each links as link}
            <li class="hover:text-third hover:border-b-third border-b-2 transition-colors">
                <PrismicLink field={link.link}>
                    {link.label}
                </PrismicLink>
            </li>
        {/each}
    </ul>

    <!-- Mobile Menu Toggle Button -->
    <div class="md:hidden">
        <input type="checkbox" role="button" aria-label="Display the menu" class="menu" bind:checked={isMobileMenuOpen}>
    </div>
</nav>

<!-- Mobile Menu -->
{#if isMobileMenuOpen}
    <div class="fixed z-40 h-screen w-full gap-5 backdrop-blur-md md:hidden">
        <ul class="w-full h-full flex flex-col gap-6 justify-center items-center text-3xl font-bold">
            {#each links as link}
                <li class="text-white drop-shadow-xl">
                    <PrismicLink field={link.link}>
                        {link.label}
                    </PrismicLink>
                </li>
            {/each}
        </ul>
    </div>
{/if}

<style>
    .menu {
        --s: 30px; /* size */
        --c: white; /* color */
        
        height: var(--s);
        aspect-ratio: 1;
        border: none;
        padding: 0;
        border-inline: calc(var(--s) / 2) solid transparent; 
        box-sizing: content-box;
        --_g1: linear-gradient(var(--c) 20%, transparent 0 80%, var(--c) 0) 
                no-repeat content-box border-box;
        --_g2: radial-gradient(circle closest-side at 50% 12.5%, var(--c) 95%, transparent) 
                repeat-y content-box border-box;
        background: 
            var(--_g2) left  var(--_p,0px) top,
            var(--_g1) left  calc(var(--s) / 10 + var(--_p,0px)) top,
            var(--_g2) right var(--_p,0px) top,
            var(--_g1) right calc(var(--s) / 10 + var(--_p,0px)) top;
        background-size: 
            20% 80%,
            40% 100%;
        position: relative;
        clip-path: inset(0 25%);
        mask: linear-gradient(90deg, transparent, black 25% 75%, transparent);
        cursor: pointer;
        transition: 
            background-position .3s var(--_s,.3s), 
            clip-path 0s var(--_s,.6s);
        appearance: none;
    }
    .menu:before,
    .menu:after {
        content: "";
        position: absolute;
        border-radius: var(--s);
        inset: 40% 0;
        background: var(--c);
        transition: transform .3s calc(.3s - var(--_s,.3s));
    }

    .menu:checked {
        clip-path: inset(0);
        --_p: calc(-1 * var(--s));
        --_s: 0s;
    }
    .menu:checked:before {
        transform: rotate(45deg);
    }
    .menu:checked:after {
        transform: rotate(-45deg);
    }
    .menu:focus-visible {
        clip-path: none;
        mask: none
	}
</style>