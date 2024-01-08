<script>
	import ImageBgParralax from "$lib/components/ImageBgParralax.svelte";

    /**
	 * @type {{ primary: { bg_img: { url: any; }; }; slice_type: any; variation: any; }}
	 */
     export let slice;

    const bgImg = slice.primary.bg_img.url;
</script>

<section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}>
    <ImageBgParralax imageUrl={bgImg} />
</section>


