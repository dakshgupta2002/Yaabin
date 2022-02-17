<script>
    import Login from '../routes/login.svelte'
    import { authUser } from '$lib/store';
    import Home from '../routes/home.svelte';

    /** @type {string} */
    export let baseUrl;
</script>
   {#if $authUser}
        <Home />
    {:else }
        <Login baseUrl={baseUrl}/>
    {/if}


<style>
    
</style>