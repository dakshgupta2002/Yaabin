<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
	export async function load({ url }) {
		return {
			props: {
				host: url.host ? url.host : `http://beta.yaabin.com`
			}
		};
	}
</script>

<script>
	import { isProtectedRoute } from '$lib/store'
	import { onMount } from "svelte";
    import Auth from "../components/auth.svelte";

	onMount(() => {
        isProtectedRoute.set(false);
	})
	export let host;
</script>

<Auth baseUrl={ host.includes("localhost") ? `http://${host}` : `https://${host}` }></Auth>

