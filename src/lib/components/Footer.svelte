<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';

	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';

	/** @type {import('../../prismicio-types').FooterDocumentData["footer_nav_links"]} */

	export let links;

	/** @type {import('../../prismicio-types').FooterDocumentData["brand"]} */

	export let brand;

	/** @type {import('../../prismicio-types').FooterDocumentData["social_nav"]} */

	export let social;

	/** @type {import('../../prismicio-types').FooterDocumentData["copyright"]} */

	export let copyright;

	/** @type {import('../../prismicio-types').FooterDocumentData["activate_social_links"]} */

	export let social_active;

	let sections = {};

	function distributeLinks() {
		links.forEach((link) => {
			if (link.selected_footer_section) {
				const sectionKey = link.selected_footer_section.toString();

				if (!sections[sectionKey]) {
					sections[sectionKey] = [];
				}

				sections[sectionKey].push(link);
			}
		});
	}

	if (links) {
		distributeLinks();
	}

	function extractIconIdentifier(richtext) {
		if (richtext && richtext.length > 0 && richtext[0].type === 'paragraph') {
			return richtext[0].text;
		}
		return '';
	}
</script>

<footer class="text-fourth w-full border-t-2 h-fit px-6 py-2">
	<div class="flex flex-col justify-between flex-wrap gap-5">
		<div class="flex border-b border-gray-500 py-5">
			<div class="grayscale">
				<a class="drop-shadow-xl" href="/">
					<PrismicImage class="min-w-24" width="100%" height="auto" field={brand[0]?.logo} />
				</a>
			</div>
			<div
				class="w-full ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-end sm:justify-items-end gap-10"
			>
				{#if links}
					{#each Object.keys(sections) as section}
						<ul class="flex flex-col gap-2 border-t p-2 border-secondary md:border-none">
							{#each sections[section] as link}
								<li
									class="w-fit transform border-b-2 border-b-transparent hover:border-b-2 hover:border-fourth transition-transform"
								>
									<PrismicLink field={link.footer_link}>
										<PrismicRichText field={link.link_title} />
									</PrismicLink>
								</li>
							{/each}
						</ul>
					{/each}
				{/if}
			</div>
		</div>
		<div class="flex flex-wrap-reverse gap-6 justify-around sm:justify-between items-center pb-2">
			<div class="flex gap-10">
				{#if copyright && brand}
					<small class="flex items-center gap-1 text-lg"
						><PrismicRichText field={copyright[0].copyright_text} /><em class="neonText-blue"
							><PrismicRichText field={brand[0].brand_name} /></em
						></small
					>
				{/if}
			</div>
			<div class="w-full flex justify-between md:justify-normal gap-6">
				{#each social as item}
					{#if item && social_active == true}
						<PrismicLink field={item.social_media_link}>
							<Icon
								class="hover:text-third transition-colors w-7 h-7 md:w-4 md:h-4"
								icon={extractIconIdentifier(item.icon_string)}
							/>
						</PrismicLink>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</footer>
