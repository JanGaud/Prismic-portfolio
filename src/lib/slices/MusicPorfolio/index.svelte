<script>
    export let slice;

    const bgImg = slice.primary.bg_img.url;
</script>

<section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    class="md:-mx-20 -mx-4 h-[1000px]"
>
    <div class="relative h-full w-full overflow-hidden">
        <div
            class="parallax-background"
            style="background-image: url({bgImg});"
        ></div>

        <div
            class="w-full h-40 absolute top-0"
            style="background: linear-gradient(0deg, rgba(255,255,255,0) 25%, rgba(0,0,0,0.87718837535014) 80%, rgba(0,0,0,1) 100%);"
        ></div>
        <div
            class="w-full h-40 absolute bottom-0"
            style="background: linear-gradient(180deg, rgba(255,255,255,0) 25%, rgba(0,0,0,0.87718837535014) 80%, rgba(0,0,0,1) 100%);"
        ></div>
    </div>
</section>

<style>
    .parallax-background {
        /* Full height and width */
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1; /* Ensure it's behind other content */

        /* Parallax effect */
        background-image: url('your-image-url'); /* Placeholder, actual image set in inline style */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
