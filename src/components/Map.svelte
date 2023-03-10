<script>
  // @ts-nocheck

  let container;
  let map;
  let zoom = 17;
  let center = { lat: 48.878585, lng: 2.325271 };

  export let restaurants;

  import { afterUpdate } from "svelte";

  afterUpdate(async () => {
    map = new google.maps.Map(container, {
      zoom,
      center,
    });
    console.log(restaurants, "");

    restaurants.map((r) => {
      console.log(r.latitude, r.longitude);
      const marker = new google.maps.Marker({
        position: { lat: r.latitude, lng: r.longitude },
        map: map,
      });
    });
  });
</script>

<div class="full-screen" bind:this={container} />

<style>
  .full-screen {
    width: 100%;
    height: 100%;
  }
</style>
