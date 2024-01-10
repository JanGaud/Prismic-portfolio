<script>
	// @ts-nocheck

	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';

	/** @type {import('../../prismicio-types').FooterDocumentData["footer_nav_links"]} */

	export let links;

	/** @type {import('../../prismicio-types').FooterDocumentData["brand"]} */

	export let brand;

	// /** @type {import('../../prismicio-types').FooterDocumentData["social_nav"]} */

	// export let social;

	/** @type {import('../../prismicio-types').FooterDocumentData["copyright"]} */

	export let copyright;


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
</script>

<footer class="text-fourth w-full border-y-2 h-fit px-6 py-2">
	<div class="flex flex-col justify-between flex-wrap gap-10">
		<div class="flex justify-between border-b border-gray-500 py-5">
			<div class="grayscale">
				<a class="drop-shadow-xl" href="/">
					<PrismicImage width="60" field={brand[0]?.logo} />
				</a>
			</div>
			<div class="w-full ml-10 flex flex-wrap md:justify-around gap-10">
				{#if links}
					{#each Object.keys(sections) as section}
						<ul class="flex flex-col gap-2">
							{#each sections[section] as link}
								<li>
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
		<div>
			<div></div>
			<div class="flex gap-10">
				{#if copyright && brand}
					<small class="flex items-center gap-1 text-lg"><PrismicRichText field={copyright[0].copyright_text} /><em class="neonText-blue"><PrismicRichText field={brand[0].brand_name} /></em></small>
				{/if}
			</div>
		</div>
	</div>
</footer>
