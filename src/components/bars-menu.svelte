<script>
	import Gallery from '../svg-components/icons/gallery.svelte';
	import Star from '../svg-components/icons/star.svelte';
	
	export let preview, barsActive;	
    const handlePic = () => {
		preview = true;
		barsActive=false;
	};

</script>

<div class="barsMenu bars-menu-root flex-1 flex flex-col mt-10 justify-start space-y-10 items-center">
	<h3 class="text-xl text-blue uppercase">plan journey</h3>
	<ul class="flex flex-col items-start space-y-3">
		<button class="flex space-x-2 items-baseline" on:click={handlePic}>
			<Gallery />
			<p class="text-orange text-2xl uppercase">picture browsing</p>
		</button>

		<li class="flex space-x-2 items-baseline">
			<Star />
			<p class="text-orange text-2xl uppercase">top countries</p>
		</li>
	</ul>
</div>


<style>
	.barsMenu{
		z-index: 2;
	}
</style>