<script>
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import { formatDate } from '$lib/utils/dateParser';

	/** @type {import("@prismicio/client").Content.ArticlesSlice} */
	export let slice;
</script>

<section
	class="my-20 flex justify-center overflow-x-hidden"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="flex items-center gap-14 p-4 overflow-x-auto snap-mandatory snap-x">
		{#each slice.items as item}
			{#if item}
				<article
					class="min-w-[300px] max-w-[300px] md:min-w-[250px] md:max-w-[250px] h-[350px] flex flex-col gap-4 overflow-y-hidden snap-center"
				>
					<header class="">
						<PrismicImage field={item.articleimg} />
					</header>
					<div class="p-2 flex flex-col justify-between gap-2 border-t-2 border-r-2 border-third">
						<h2 class="neonText-blue text-lg"><PrismicRichText field={item.articletitle} /></h2>
						<p class="text-fourth text-sm line-clamp-4">
							<PrismicRichText field={item.articletext} />
						</p>
						<small class="text-sm text-fourth">{item.articledate ? formatDate(item.articledate) : ''}</small>
					</div>
				</article>
			{/if}
		{/each}
	</div>
</section>
