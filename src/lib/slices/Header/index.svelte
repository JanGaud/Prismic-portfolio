<script>
	import { PrismicRichText, PrismicLink } from '@prismicio/svelte';
	import Icon from '@iconify/svelte';

	/**
	 * @type {{ primary: { headerimg: { url: any; }; title: any; subtitle: any; headerlink: any; }; slice_type: any; variation: any; }}
	 */
	export let slice;
	let headerImg = slice.primary.headerimg.url;
	let headerlink = slice.primary.headerlink.url;
</script>

<section
	style="background-image: url({headerImg}); background-size: cover; background-position: center;"
	class="relative overflow-hidden h-screen md:h-[400px] md:-my-12 md:-mx-20 -my-10 -mx-4 flex flex-col justify-center items-center gap-6 px-4 py-8 bg-primary"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="absolute w-full h-full bg-black opacity-75"></div>

	<hgroup class="flex flex-col items-center gap-7 md:gap-5 md:pt-14 px-6 text-center z-10">
		<h2 class="text-5xl md:text-7xl text-white neonText-blue">
			<PrismicRichText field={slice.primary.title} />
		</h2>
		<h3 class="text-2xl md:text-3xl text-white neonText">
			<PrismicRichText field={slice.primary.subtitle} />
		</h3>
	</hgroup>

	<div class="flex justify-around w-fit z-10">
		<a
			class="text-lg md:text-2xl text-fourth px-6 py-4 border-2 border-fourth rounded-full shadow-lg hover:border-third hover:text-third hover:backdrop-blur transition-colors"
			href={headerlink}
		>
			<Icon icon="gravity-ui:play" />
		</a>
	</div>
	<div
		class="absolute w-full bottom-0 h-40"
		style="background: rgb(0,0,0);
    	background: linear-gradient(0deg, rgba(0,0,0,0.87718837535014) 0%, rgba(255,255,255,0) 84%);"
	></div>
</section>
