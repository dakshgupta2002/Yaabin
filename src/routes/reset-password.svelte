<script>
    import supabase from "$lib/supabase";
    import World from "../svg-components/world.svelte";
    import { toast } from '$lib/toast-helper'
	import { isProtectedRoute } from '$lib/store'
	import { onMount } from "svelte";

	onMount(() => {
		isProtectedRoute.set(false)
	})

    let email;

    async function sendEmail(){
        if(!email){
            toast.warn("enter all the details")
            return
        }
        const {error} = await supabase.auth.api.resetPasswordForEmail(email);
        if(error){
            console.log(error)
            toast.error(error.message)
            return
        }
        toast.success("email has been sent")
        goto("/")
    }

</script>
<div class="flex-1 flex flex-col md:flex-row justify-around md:items-center">
<World absolute />
<form class="reset-password-root flex-1 flex flex-col justify-center space-y-5 flex-1 flex flex-col justify-center space-y-3 md:max-w-xl md:px-8" on:submit|preventDefault={sendEmail}>
    <p class="text-center text-orange text-2xl" > Type in your email account and follow these steps to restore your account </p>
    <input type="email" name="reset-password-email" required autofocus id="reset-password-email" placeholder="email" class="inp" bind:value={email} />
    <button class="btn bg-blue capitalize"> send email </button>
</form>
</div>

<style>
    p{
        max-width: 600px;
    }
</style>