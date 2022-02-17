<script>
    import World from "../svg-components/world.svelte";
    import supabase from '$lib/supabase'
    import { toast } from '$lib/toast-helper'
    import { goto } from "$app/navigation";
    import { isProtectedRoute } from '$lib/store'
	import { onMount } from "svelte";

	onMount(() => {
		isProtectedRoute.set(false)
	})

    let formObj = {
        email : "",
        password : "",
        name : "",
        country : ""
    }

    /** @type {svelte.JSX.FormEventHandler<HTMLFormElement>} */
    async function handleSubmit(event){
        if(Array.from(Object.values(formObj).values()).filter(el => !el).length){
            toast.warn("enter all the details")
            return
        }
        const {error} = await supabase.auth.signUp({
            email : formObj.email,
            password : formObj.password,
            data : {
                country : formObj.country,
                name : formObj.name
            }
        })
        if(error){
            console.log(error)
            toast.error(error.message)
            return
        }
        toast.success("signed up successfully")
        goto("/home")
    }

</script>


<div class="flex-1 flex flex-col md:flex-row justify-around md:items-center">
<World absolute />
<form class="sign-up-root flex-1 flex flex-col justify-center space-y-3 md:max-w-xl md:px-8" on:submit|preventDefault={handleSubmit}>
    <p class="text-center text-orange uppercase text-3xl" > register </p>
    <input class="inp" type="name" id="sign-up-name" name="sign-up-name" bind:value={formObj.name} placeholder="name" autofocus required />
    <select class="inp" id="sign-up-country" name="sign-up-country" bind:value={formObj.country} required >
        <option value="" disabled > country </option>
        <option value="USA" selected >USA</option>
    </select>
    <input class="inp" type="email" id="sign-up-email" name="sign-up-email" placeholder="email" bind:value={formObj.email}  required />
    <input class="inp" type="password" id="sign-up-password" name="sign-up-password" placeholder="password" minlength="{6}" bind:value={formObj.password} required />
    <button class="text-right text-green uppercase text-3xl place-self-end" type="submit"> go </button>
</form>

</div>

<style>
    form.sign-up-root > p {
        letter-spacing: .15em;
    }

    form.sign-up-root option:not(:disabled){
        color: var(--primary-orange);
    }


    form.sign-up-root > button {
        letter-spacing: .075em;
    }

</style>