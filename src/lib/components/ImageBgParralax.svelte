<script>
	/**
	 * @type {any}
	 */
	export let imageUrl;
</script>

<div class="md:-mx-20 -mx-4 h-[1000px]">
	<div class="relative h-full w-full overflow-hidden">
		<div class="parallax-background" style="background-image: url({imageUrl});"></div>

		<div
			class="w-full h-40 absolute top-0 z-20"
			style="background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,0) 7%, rgba(0,0,0,0.3925945378151261) 29%, rgba(0,0,0,0.7035189075630253) 55%, rgba(0,0,0,1) 93%)"
		></div>

		<slot />

		<div
			class="w-full h-40 absolute bottom-0 z-20"
			style="background: linear-gradient(180deg, rgba(255,255,255,0) 7%, rgba(0,0,0,0.3925945378151261) 29%, rgba(0,0,0,0.7035189075630253) 55%, rgba(0,0,0,1) 93%)"
		></div>
	</div>
</div>
