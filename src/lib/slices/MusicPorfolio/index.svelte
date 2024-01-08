<script>
    /**
	 * @type {{ primary: { bg_img: { url: any; }; }; slice_type: any; variation: any; }}
	 */
     export let slice;

    const bgImg = slice.primary.bg_img.url;
</script>

<section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    class="md:-mx-20 -mx-4 h-screen md:h-[1000px]"
>
    <div class="relative h-full w-full overflow-hidden">
        <div
            class="w-full h-40 absolute top-0"
            style="background: linear-gradient(0deg, rgba(255,255,255,0) 25%, rgba(0,0,0,0.87718837535014) 80%, rgba(0,0,0,1) 100%);"
        ></div>
        <div
            class="w-full h-40 absolute bottom-0"
            style="background: linear-gradient(180deg, rgba(255,255,255,0) 25%, rgba(0,0,0,0.87718837535014) 80%, rgba(0,0,0,1) 100%);"
        ></div>
        <img class="object-cover" src={bgImg} alt="" />
    </div>
</section>
