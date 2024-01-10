<script>
	import Icon from '@iconify/svelte';
	import { PrismicLink } from '@prismicio/svelte';

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
	{#each social.filter(item => item && item.social_media_link) as item}
		<div class="w-20 h-60 border border-red-500 fixed top-1/2 transform -translate-y-1/2 right-0 z-40">
			<PrismicLink field={item.social_media_link}>
				<Icon
					width="30"
					height="30"
					class="neonIcon-red"
					icon={extractIconIdentifier(item.icon_string)}
				/>
			</PrismicLink>
		</div>
	{/each}
{/if}
