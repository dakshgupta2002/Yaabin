<script>
	let worldWidth;
	let screenWidth;
	let screenHeight;
	export let preview;
	export let absolute = false;
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<div
	bind:clientWidth={worldWidth}
	class="world-root bg-blue sm:place-self-center xl:place-self-center 2xl:place-self-center"
	class:bottom={absolute && screenWidth < 1200}
	class:side={absolute && screenWidth >= 1200}
	style="--world-width : {worldWidth}px; width: {screenHeight < 850 && screenWidth > screenHeight
		? screenHeight * (10 / 17) + 'px'
		: '100%'}"
/>

<style>
	div.world-root {
		width: 100%;
		max-width: 500px;
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		overflow: hidden;
		background-image: url('/world.svg');
		background-repeat: repeat-x;
		background-size: cover;
		background-position: 0 0;
		animation: spin 45s linear infinite;
	}

	div.world-root.bottom {
		position: absolute;
		bottom: max(-60vw, -350px);
	}

	div.world-root.side {
		right: 50px;
		top: calc(20% - (var(--world-width) / 2));
	}

	@keyframes spin {
		100% {
			background-position: var(--world-width) 0px;
		}
	}
</style>
