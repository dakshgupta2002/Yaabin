<script>
    import supabase from "$lib/supabase";
    import { authUser } from '$lib/store';
    import { onMount } from "svelte";
    import Header from "../components/header.svelte";
    import {SvelteToast} from '@zerodevx/svelte-toast';
    import { goto } from "$app/navigation";



    onMount(() => {
        authUser.set(supabase?.auth?.user());
        if(!supabase?.auth?.user()){
            goto("/login");
        }
        supabase.auth.onAuthStateChange((event,session) => {
            authUser.set(session?.user);
            session?.user ?  goto("/"):  goto("/login");
        })
    })
</script>

<div class="root">
    <Header />
    <slot />
</div>

<SvelteToast />
        
<style global lang="postcss" >    
    @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
    @font-face {
        font-family: "Arciform";
        src : url("/fonts/Arciform.otf") format("opentype");
        font-style: normal;
    }

    :root{
        --back-color : #1D2531;
        --facebook-color : #3567B8;
        --twitter-color : #00A2F9;
        --primary-blue : #99CCFF;
        --primary-orange : #E5C2A5;
        --menu-active-bg : #1d2531ea;
        --secondary : #C5FFBB;
        --arciform-font :  'Arciform', 'Lucida Sans', 'Gill Sans', 'Geneva', 'Verdana', 'sans-serif';
        --roboto-font : 'Roboto', 'Lucida Sans', 'Gill Sans', 'Geneva', 'Verdana', 'sans-serif';
        --top-margin : 3rem;
        --side-margin: 3rem;
    }

    div.root{
        background-color: var(--back-color);
        background-image: url(/background.svg);
        background-repeat: no-repeat;        
        background-size: 200%;

        height: max( 100vh, 675px );
        width: 100%;
        overflow: hidden;
        position: relative;

        color: white;
        font-family: var(--arciform-font);
        font-size: 1rem;
        letter-spacing: .1em;

        padding-top: var(--top-margin);
        padding-inline: var(--side-margin);

        display: flex;
        flex-direction: column;

        animation: move-bg 60s linear infinite alternate;
    }

    button.btn{
        --btn-font : 1.2rem;
        font-size: var(--btn-font);
        font-family: var(--roboto-font);
        letter-spacing: .075em;
        text-align: center;  

        border: none;
        outline: none;
        border-radius: 1.25em;
        padding: .5em;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    button.btn:hover{
        cursor: pointer;
    }


    input.inp, select.inp {
        --inp-font : 1.25rem;
        font-size: var(--inp-font);
        letter-spacing: .1em;

        border: none;
        outline: none;
        border-radius: .25em;
        padding: .5em;

        background-color: #28303d;
        color: var(--primary-orange);
    }

    select.inp{
        padding-block: .75em;
    }

    input.inp::placeholder, select.inp:invalid {
        color: #555154;
    }
    input.inp:focus, select.inp:focus {
        box-shadow: inset 0 0 .1em black;
    }

    ._toastBar{
        border-radius: 8px;
    }

    @media(max-width:594px){
        div.world-root.bottom { left:0; }
    }

    @keyframes move-bg{
        from{
            background-position: 0% 0%;
        }
        to{
            background-position: 100% 100%;
        }
    }

    @tailwind base;
    @tailwind utilities;
    @tailwind components;
</style>