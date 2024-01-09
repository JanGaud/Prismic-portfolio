<script>
	import { onMount } from 'svelte';
	import { PrismicLink, PrismicRichText } from '@prismicio/svelte';

	/**
	 * @type {{ items: any[]; }}
	 */
	export let slice;

	/**
	 * @type {any[]}
	 */
	let events = [];

	onMount(() => {
		events = slice.items.map((item, index) => ({ ...item, uniqueKey: 'first_' + index }));
		const duplicatedEvents = slice.items.map((item, index) => ({
			...item,
			uniqueKey: 'second_' + index
		}));
		events = [...events, ...duplicatedEvents];
	});

	/**
	 * @param {string | number | Date} dateStr
	 */
	function formatDate(dateStr) {
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<section class="mt-32 h-20 md:h-24 md:-mx-20 -mx-4 border-y-2">
	<div class="flex items-center gap-28 h-full overflow-x-hidden">
		<div class="inline-flex gap-20 animate-scrollBanner">
			{#each events as event (event.uniqueKey)}
				<PrismicLink field={event.link} class="flex items-center gap-3 min-w-fit">
					<div class="h-12 w-20 md:w-24">
						<img
							class="object-contain h-full w-full"
							src={event.logo.url}
							alt={event.logo.alt || ''}
						/>
					</div>
					<div class="text-fourth text-left flex flex-col justify-center">
						<p><PrismicRichText field={event.short_description} /></p>
						<small>{formatDate(event.event_date)}</small>
					</div>
				</PrismicLink>
			{/each}
		</div>
	</div>
</section>

<style>
.animate-scrollBanner {
    animation: scrollBanner 140s linear infinite;
}

@media screen and (max-width: 768px) {
    .animate-scrollBanner {
        animation-duration: 60s;
    }
}

@keyframes scrollBanner {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-90%);
    }
}
</style>
