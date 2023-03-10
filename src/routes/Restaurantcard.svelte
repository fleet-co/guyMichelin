<script>
// @ts-nocheck
	import cardImg from "../lib/images/svelte-logo.svg"
	let container;
	let map;
	let zoom = 21;
  let center = {lat: 48.878585, lng: 2.325271};
	let input;

</script>

<style>
	.restaurant-card {
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 8px;
			gap: 8px;
			width: 90%;
			height: 120px;
			background: #EDF1D6;
			border-radius: 8px;
	}
	.card-title {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		display: flex;
		align-items: center;
		letter-spacing: -0.017em;
		color: #000000;
	}

</style>

<div class="restaurant-card">
	<img src={cardImg} alt=""/>
	<p class="card-title">
		MAGASIN DE POULET
	</p>
</div>