<script>
// @ts-nocheck

	let container;
	let map;
	let zoom = 21;
  let center = {lat: 48.878585, lng: 2.325271};
	let input;

  import { onMount } from 'svelte';

	onMount(async () => {
		map = new google.maps.Map(container, {
      zoom,
			center,
		});
		const marker = new google.maps.Marker({
			position: {lat: 48.878585, lng: 2.325271},
			map: map,
  	});
	});
</script>

<style>
.full-screen {
    width: 100%;
    height: 100%;
}
</style>

<div class="full-screen" bind:this={container}></div>