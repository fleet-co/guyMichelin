<script>
  import Map from "../components/Map.svelte";
  import Listrestaurant from "../components/Listrestaurant.svelte";

  import { supabase } from "$lib/utils/SupabaseClient.js";
  import { onMount } from "svelte";

  let restaurants = [];

  onMount(async () => {
    const { data, error } = await supabase.from("restaurants").select();
    restaurants = data;
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="container">
    <Listrestaurant {restaurants} />
  </div>
  <div class="mapContainer">
    <Map {restaurants} />
  </div>
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #9dc08b;
    width: 40vw;
    height: 100vh;
    gap: 16px;
  }
  .mapContainer {
    width: 60vw;
    height: 100vh;
  }
</style>
