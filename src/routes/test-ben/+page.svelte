<script>
  import { createClient } from "@supabase/supabase-js";
  import { onMount } from "svelte";
  let restaurants = [];
  let error = "";
  const supabase = createClient(
    "https://qhdlalgoiabufsxbmeha.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoZGxhbGdvaWFidWZzeGJtZWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0Mzg1MjUsImV4cCI6MTk5NDAxNDUyNX0.OSUXbV-zMO3ZOuPWLD9XpTcDtAmdNf44FT13ZjEFZ-8"
  );
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
