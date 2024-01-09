<script>
	import ImageBgParralax from '$lib/components/ImageBgParralax.svelte';

	/**
	 * @type {{ primary: { bg_img: { url: any; }; }; slice_type: any; variation: any; items: any; }}
	 */
	export let slice;

	const bgImg = slice.primary?.bg_img?.url;

	console.log(slice);
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="relative">
	<ImageBgParralax imageUrl={bgImg}>
		<div>
			
		</div>
		<div class="h-full w-full flex justify-center">
			<div
				class="h-full backdrop-blur-xl shadow px-8 py-32 grid grid-cols-1 md:grid-cols-2 justify-items-around gap-20 items-center overflow-hidden overflow-y-scroll"
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
