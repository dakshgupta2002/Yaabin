<script>
	import BottomMenu from '../components/bottom-menu.svelte';
	import World from '../svg-components/world.svelte';
	import { isProtectedRoute, authUser } from '$lib/store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import PictureCarousel from '../components/picture-carousel.svelte';

	let preview = false;
	let centerFocused = false;
	onMount(() => {
		isProtectedRoute.set(true);
		if (!$authUser) goto('/login');
	});
</script>

<div class="home-root flex-1 flex flex-col mt-20">
	{#if preview == true}
		<div class="pics">
			<World bind:preview class="position" />
			<PictureCarousel class="PictureCarousel" bind:preview bind:centerFocused />
			<!-- <button on:tap={handleClose}>X</button> -->
		</div>
	{:else}
		<World bind:preview />
	{/if}

	{#if centerFocused === false}
		<BottomMenu bind:preview />
	{/if}
</div>

<style>
	div.home-root :global(.position) {
		margin-top: 400px;
        margin-left: auto;
        margin-right: auto;
	}

	div.home-root {
		position: relative;
	}
	div.pics {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
