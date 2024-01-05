<script>
	import { PrismicRichText } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.HeaderSlice} */
	export let slice;
	
	let headerImg = slice.primary.headerimg.url;
</script>

<section 
    style="background-image: url({headerImg}); background-size: cover; background-position: center;"
    class="relative overflow-hidden h-screen md:h-[400px] md:-my-12 md:-mx-20 -my-10 -mx-4 flex flex-col justify-center items-center gap-6 px-4 py-8 bg-primary"
    data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

    <div class="absolute w-full h-full bg-primary opacity-60"></div>

    <!-- Content: Headings and Button -->
    <hgroup class="flex flex-col items-center gap-3 px-6 text-center z-10">
        <h2 class="text-4xl md:text-7xl text-white neonText">
            <PrismicRichText field={slice.primary.title} />
        </h2>
        <h3 class="text-xl md:text-2xl text-white neonText">
            <PrismicRichText field={slice.primary.subtitle} />
        </h3>
    </hgroup>

    <div class="flex justify-around w-fit z-10">
        <a class="text-lg md:text-2xl text-white px-6 py-4 border-2 rounded-2xl shadow-lg hover:border-fifth hover:text-fifth transition-colors"
           href="<PrismicLink field={slice.primary.headerlink}>Link</PrismicLink>">
            See more
        </a>
    </div>
</section>


<style>
 .neonText 
 {
  color: #fff;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #368084,
      0 0 82px #368084,
      0 0 92px #368084,
      0 0 102px #368084,
      0 0 151px #368084;
	}

</style>