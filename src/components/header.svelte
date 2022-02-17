<script>
    import Logo from '../svg-components/logo.svelte'
    import LogoName from '../svg-components/logo-name.svelte';
    import User from '../svg-components/icons/user.svelte';
    import { authUser, isProtectedRoute } from '$lib/store'
    import supabase from '$lib/supabase'
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if(error){
            console.log(error)
            toast.error(error.message)
            return
        }
    }
</script>


<header class="flex items-center">
    <a class="logo flex space-x-2 items-center" href="/">
        <Logo />
        <LogoName />
    </a>
    {#if $authUser && $isProtectedRoute}
        <span class="flex-1 flex justify-end" on:click={handleLogout}>
            <User  />
        </span>
    {/if}
</header>



