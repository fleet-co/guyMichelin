<script>
  import { createClient } from "@supabase/supabase-js";
  import {
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
  } from "$env/static/public";
  import { onMount } from "svelte";

  let restaurants = [];
  let error = "";

  const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

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
