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
        <div class="text-white">
            {#each slice.items as item}
                {#if item}
                    {@html item.soundcloud_playlist.html}
                {/if}
            {/each}
        </div>
    </ImageBgParralax>
</section>
