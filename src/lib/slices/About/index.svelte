<script>
    import { PrismicRichText } from '@prismicio/svelte';
    import { onMount } from 'svelte';

    /**
	 * @type {{ primary: { about_img: { url: any; }; about_title: any; about_subtitle: any; }; slice_type: any; variation: any; items: any; }}
	 */
     export let slice;
    let image = slice.primary.about_img.url;
    let elements;

    onMount(() => {
        elements = document.querySelectorAll('.float-in-effect');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        elements.forEach((el) => {
            observer.observe(el);
        });
    });
</script>

<section
    class="my-20 h-fit justify-items-center grid-cols-1 grid lg:grid-cols-2 xl:gap-20"
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
>
    <div class="relative w-full aspect-square float-in-effect">
        <div
            class="absolute w-full h-full"
            style="background: rgb(255,255,255);
                background: radial-gradient(circle, rgba(255,255,255,0) 42%, rgba(0,0,0,0.87718837535014) 64%, rgba(0,0,0,1) 73%);"
        ></div>
        <img class="object-cover h-full w-full" src={image} alt="" />
    </div>

    <div class="text-fourth text-center flex flex-col justify-center gap-3 float-in-effect">
        <hgroup class="z-30">
            <h2 class="neonText-red text-3xl md:text-6xl mb-3">
                <PrismicRichText field={slice.primary.about_title} />
            </h2>
            <h3 class="md:text-lg"><PrismicRichText field={slice.primary.about_subtitle} /></h3>
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

<style>
    .float-in-effect {
        opacity: 0;
        transform: translateY(20px);
        transition: transform 0.7s ease-out, opacity 0.7s ease-out;
    }

    :global(.float-in-effect.visible) {
        opacity: 1;
        transform: translateY(0);
    }
</style>
