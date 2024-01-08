<script>
	import { PrismicLink, PrismicRichText } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.QuickLinksSlice} */
	export let slice;
</script>

<section class="my-20 grid grid-cols-3 gap-6 justify-items-center" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  {#each slice.items as item}
    {#if item}
      <PrismicLink
        class="flex justify-center items-center border-2 max-w-72 shadow-fourth text-sm md:text-3xl text-fourth w-full py-7 border-fourth shadow-md hover:text-third hover:backdrop-blur transition-colors"
        field={item.link}
      >
        <PrismicRichText field={item.link_name} />
      </PrismicLink>
    {/if}
  {/each}
</section>

