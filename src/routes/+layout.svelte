<script>
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { startBlinking } from '$lib/utils/neonBlink';
	import SocialNav from '$lib/components/SocialNav.svelte';

	onMount(() => {
		startBlinking();
	});
	
	export let data;
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<Nav links={data.nav.data.links} brand={data.nav.data.brand} />
<main class="md:my-12 md:mx-20 my-10 mx-4 min-h-screen">
	<slot />
	<SocialNav social_active={data.social.data.activate_social_links} social={data.social.data.social_nav}/>
</main>
<PrismicPreview {repositoryName} />
<Footer links={data.footer.data.footer_nav_links} brand={data.footer.data.brand} social={data.social.data.social_nav} copyright={data.footer.data.copyright} social_active={data.footer.data.activate_social_links}/>
 