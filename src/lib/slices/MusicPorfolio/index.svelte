<script>
	import ImageBgParralax from '$lib/components/ImageBgParralax.svelte';
	import { PrismicRichText } from '@prismicio/svelte';

	/**
	 * @type {{ primary: { bg_img: { url: any; }; big_title: any; last_update: any }; slice_type: any; variation: any; items: any; }}
	 */
	export let slice;

	const bgImg = slice.primary?.bg_img?.url;

	/**
	 * @param {string | number | Date} dateStr
	 */
	function formatDate(dateStr) {
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<ImageBgParralax imageUrl={bgImg}>
		<div class="relative h-full w-full flex justify-center">
			<div class="w-full absolute top-20 left-1/2 transform -translate-x-1/2 text-white z-40">
				<h2 class="neonText text-3xl md:text-6xl mb-3 text-center">
					<PrismicRichText field={slice.primary.big_title} />
				</h2>
				<div class="date-container text-center">
					<small>Last update: {formatDate(slice.primary.last_update)}</small>
				</div>
			</div>
			<div
				class="h-full backdrop-blur-xl shadow px-8 py-56 grid grid-cols-1 md:grid-cols-2 justify-items-around gap-20 items-center overflow-hidden overflow-y-scroll"
			>
				{#each slice.items as item}
					{#if item}
						<div
							class="z-30 min-w-[250px] max-w-[250px] min-h-[250px] max-h-[250px] shadow-2xl overflow-hidden"
						>
							{@html item.soundcloud_url.html}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</ImageBgParralax>
</section>

<style>
	.neonText {
		color: #fff;
		text-shadow:
			0 0 7px #fff,
			0 0 10px #fff,
			0 0 21px #fff,
			0 0 42px #f82124,
			0 0 82px #f82124,
			0 0 92px #f82124,
			0 0 102px #f82124,
			0 0 151px #f82124;
	}
</style>
