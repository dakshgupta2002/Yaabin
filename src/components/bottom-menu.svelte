<script>
	import BackPack from '../svg-components/icons/back-pack.svelte';
	import Bars from '../svg-components/icons/bars.svelte';
	import BackPackMenu from './back-pack-menu.svelte';
	import BarsMenu from './bars-menu.svelte';

	let barsActive = false;
	let backPackActive = false;
    export let preview;

</script>

<div
	class="bottom-menu-root flex flex-col justify-end"
	class:bottom-menu-open={barsActive || backPackActive}
>	
	{#if barsActive || backPackActive}
		<div class="menu-body" class:rounded-br={barsActive} class:rounded-bl={backPackActive}>
			{#if barsActive}
				<BarsMenu bind:preview={preview} bind:barsActive={barsActive}/>
			{:else}
				<BackPackMenu />
			{/if}
		</div>
	{/if}
    
	<div
		class="bottom-menu-bar flex justify-between items-center"
		class:bar-shadow={!(barsActive || backPackActive)}
	>
		<Bars
			{barsActive}
			on:tap={() => {
				barsActive = !barsActive;
				backPackActive = false;
			}}
		/>
		<BackPack
			{backPackActive}
			on:tap={() => {
				backPackActive = !backPackActive;
				barsActive = false;
			}}
		/>
	</div>
</div>

<style>
	div.bottom-menu-root {
		position: absolute;
		bottom: 4rem;
		left: 0;
		right: 0;
	}

	div.bottom-menu-root.bottom-menu-open {
		min-height: 50vh;
	}

	div.bottom-menu-root > div.menu-body {
		background-color: var(--menu-active-bg);
		flex: 1;
		border: 0.5px solid rgba(0, 0, 0, 0.75);
		border-bottom: none;
		border-radius: 1.25rem;
		position: relative;
		display: flex;
	}

	div.bottom-menu-root > div.menu-body::before {
		content: '';
		width: 4rem;
		height: 0.1rem;
		top: 0.5rem;
		left: calc(50% - 2rem);
		background-color: var(--back-color);
		position: absolute;
		border-radius: 0.25rem;
	}

	div.bottom-menu-root > div.menu-body.rounded-br {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 1.25rem;
	}

	div.bottom-menu-root > div.menu-body.rounded-bl {
		border-bottom-left-radius: 1.25rem;
		border-bottom-right-radius: 0;
	}

	div.bottom-menu-root > div.bottom-menu-bar {
		border-radius: 1.25rem;
	}

	div.bottom-menu-root > div.bottom-menu-bar.bar-shadow {
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
	}
</style>
