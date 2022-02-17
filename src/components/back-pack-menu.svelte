<script>
    import BucketList from "../svg-components/icons/bucket-list.svelte";
    import CheckList from "../svg-components/icons/check-list.svelte";
    import Intinerary from "../svg-components/icons/intinerary.svelte";
</script>

<ul class="back-pack-menu-root flex-1 flex flex-col justify-around items-center mt-5">
    <li class="flex flex-col items-center space-y-2"> <CheckList /> <p> check list </p> </li> 
    <li class="flex flex-col items-center space-y-2"> <Intinerary /> <p> itinenary </p> </li> 
    <li class="flex flex-col items-center space-y-2"> <BucketList/> <p> bucket list </p> </li> 
</ul>


<style>
    ul.back-pack-menu-root > li > p {
        max-width: 10ch;
        text-align: center;
        font-size: .8rem;
        text-transform: capitalize;
        color: var(--primary-orange);
    }
</style>

