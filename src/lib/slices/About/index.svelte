<script>
	import { PrismicRichText } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.AboutSlice} */
	export let slice;

	let image = slice.primary.about_img.url;
</script>

<section
	class="my-20 h-screen justify-items-center grid-cols-1 grid lg:grid-cols-2"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="relative w-full h-full">
		<div
			class="absolute w-full h-full"
			style="background: rgb(255,255,255);
				background: radial-gradient(circle, rgba(255,255,255,0) 42%, rgba(0,0,0,0.87718837535014) 64%, rgba(0,0,0,1) 73%);"
		></div>
		<img class="object-cover h-full w-auto" src={image} alt="" />
	</div>

	<div class="text-fourth text-center flex flex-col justify-center gap-3">
		<hgroup>
			<h2 class="text-6xl"><PrismicRichText field={slice.primary.about_title} /></h2>
			<h3 class="text-lg"><PrismicRichText field={slice.primary.about_subtitle} /></h3>
		</hgroup>
		<div class="flex flex-col gap-3">
			{#each slice.items as item}
				{#if item}
					<p><PrismicRichText field={item.about_text} /></p>
				{/if}
			{/each}
		</div>
	</div>
</section>
