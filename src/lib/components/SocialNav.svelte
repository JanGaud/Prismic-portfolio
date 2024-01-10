<script>
	import Icon from '@iconify/svelte';
	import { PrismicLink, PrismicRichText } from '@prismicio/svelte';

	/**
	 * @type {import('../../prismicio-types').SocialNavigationDocumentData["activate_social_links"]}
	 */
	export let social_active;

	/**
	 * @type {import('../../prismicio-types').SocialNavigationDocumentData["social_nav"]}
	 */
	export let social;

	/**
	 * @param {string | any[]} richtext
	 */
	function extractIconIdentifier(richtext) {
		if (richtext && richtext.length > 0 && richtext[0].type === 'paragraph') {
			return richtext[0].text;
		}
		return '';
	}
</script>

{#if social_active}
    <div class="hidden sm:flex flex-col gap-5 fixed top-1/2 -translate-y-1/2 right-0 z-40">
        <ul class="rounded-2xl">
            {#each social.filter((item) => item && item.social_media_link) as item}
                <li class="w-[300px] backdrop-blur-3xl rounded-3xl px-2 h-14 flex justify-between items-center mr-[-254px] hover:ml-[-210px] duration-500">
                    <PrismicLink field={item.social_media_link} class="flex justify-between items-center w-full">
                        <div class="flex items-center gap-3">
                            <Icon
                                width="33"
                                height="33"
                                class="neonIcon-red text-white"
                                icon={extractIconIdentifier(item.icon_string)}
                            />
                            <p class="text-white text-sm max-w-[210px]">
                                <PrismicRichText field={item.description_text} />
                            </p>
                        </div>
                    </PrismicLink>
                </li>
            {/each}
        </ul>
    </div>
{/if}
