<script>
  import { supabase } from "$lib/utils/SupabaseClient";
  import { onMount } from "svelte";

  let restaurants = [];
  let error = "";

  onMount(async () => {
    const { data, error } = await supabase.from("restaurants").select();

    restaurants = data;
    // console.log(data);
    // console.log(error);
  });
</script>

<svelte:head>
  <title>Restaurants</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  {#if error}
    {error}
  {/if}
  {#each restaurants as restaurant}
    <h2>{restaurant.name}</h2>
  {/each}
</div>
