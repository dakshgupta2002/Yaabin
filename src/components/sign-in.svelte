<script>
    import { goto } from '$app/navigation'
    import Facebook from "../svg-components/icons/facebook.svelte";
    import Twitter from "../svg-components/icons/twitter.svelte";
    import World from "../svg-components/world.svelte";
    import supabase from '$lib/supabase'

    export let baseUrl;

    function handleFacebookLogin(){ 
        supabase.auth.signIn({provider: "facebook"},{redirectTo: baseUrl+"/"})
    }

</script>

<div class="sign-in-root flex-1 flex flex-col lg:flex-row justify-around lg:items-center">
    <World />
    <div class="sign-in-options flex flex-col space-y-2 sm:place-self-center">
        <button class="btn bg-facebook" on:click={handleFacebookLogin}>
            <Facebook /> <span class="ml-2"> Login with Facebook </span> 
        </button>
        <p class="text-center text-orange text-xl font-roboto" > or </p>
        <button class="btn bg-blue" on:click|preventDefault={ () => goto("/signup") }> <a href="/signup"> Create an account </a> </button>
        <p class="text-center text-orange text-xl font-roboto"> Already have an accout? <a class="text-twitter" href="/login">Log in </a> </p>
    </div>
</div>

<style>
    p{
        max-width: 600px;
    }
</style>