<script>
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
	import Map from "./Map.svelte";
	import Restaurantcard from "./Restaurantcard.svelte";
	import Button from "../components/Button.svelte";
	import { goto } from "$app/navigation";

	let searchRestaurant = "";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="container">
		<p class="title">Guy Michelin</p>
		<div class="verticalSeparator" />
		<div class="horizontalContainer">
			<input class="mainInput" value={searchRestaurant} />
			<Button
				buttonText="Ajouter un Restaurant"
				onClick={() => goto("/restaurant_add")}
			/>
		</div>
		<Restaurantcard />
		<Restaurantcard />
		<Restaurantcard />
	</div>
	<div class="mapContainer">
		<Map />
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

	.horizontalContainer {
		display: flex;
		flex-direction: row;
		gap: 16px;
	}
	.mapContainer {
		width: 60vw;
		height: 100vh;
	}
	.mainInput {
		width: 202px;
		height: 38px;
		background: #ffffff;
		border: 1px solid #000000;
		border-radius: 12px;
	}
	.title {
		color: white;
		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 40px;
		line-height: 48px;
		margin: 0;
	}
	.verticalSeparator {
		height: 1px;
		width: 60%;
		background: black;
	}
</style>
