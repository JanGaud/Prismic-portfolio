<script>
	// @ts-nocheck

	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	/**
	 * @type {{ items: any[]; slice_type: any; variation: any; primary: { title: any; }; }}
	 */
	export let slice;

	/**
	 * @param {string | number | Date} isoString
	 */
	function formatDateTime(isoString) {
		if (!isoString) return '';

		const date = new Date(isoString);
		const formattedDate = date.toLocaleDateString('en-US', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
		const formattedTime = date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: true
		});
		return `${formattedDate}, ${formattedTime}`;
	}

	/**
	 * @param {{ event_date: string | number | Date; }} a
	 * @param {{ event_date: string | number | Date; }} b
	 */
	function compareDates(a, b) {
		const dateA = new Date(a.event_date);
		const dateB = new Date(b.event_date);
		return dateA.getTime() - dateB.getTime();
	}

	$: formattedItems = slice.items
		.map((/** @type {{ event_date: string | number | Date; }} */ item) => ({
			...item,
			formattedEventDate: formatDateTime(item.event_date),
			rawEventDate: item.event_date ? new Date(item.event_date) : null
		}))
		.sort(compareDates);

	let currentIndex = 0;
	/**
	 * @type {string | number | NodeJS.Timeout | undefined}
	 */
	let interval;

	onMount(() => {
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % slice.items.length;
		}, 10000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<section
	class="h-fit my-20 gap-10"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>

	<div>
		<h2 class="neonText-red text-3xl md:text-6xl text-center md:text-left mb-3 z-30">
			<PrismicRichText field={slice.primary.title} />
		</h2>
		<div class="flex justify-center w-full gap-10 h-96 mt-10">
			<div
				class="flex flex-col w-full py-4 px-4 gap-6 text-fourth overflow-y-auto"
			>
				{#each formattedItems as item}
					<div class="min-h-20 max-h-20 backdrop-blur-2xl border-y-2 border-primary">
						<div class="h-full flex flex-col justify-between p-2">
							<div class="flex justify-between items-center">
								<h3 class="text-secondary md:text-xl">
									<PrismicRichText field={item.event_title} />
								</h3>
								<p class="text-secondary"><PrismicRichText field={item.event_location} /></p>
							</div>
							<div class="flex justify-between items-center">
								<small>{item.formattedEventDate}</small>
								<button
									class="w-fit flex items-center gap-2 text-sm hover:border-b-2 hover:border-fourth border-b-2 border-transparent transition-transform"
								>
									<PrismicLink field={item.event_link}
										><PrismicRichText field={item.link_text} /></PrismicLink
									>
									<Icon icon="solar:arrow-right-outline" />
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>


<style></style>