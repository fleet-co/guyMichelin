<script>
// @ts-nocheck
	import cardImg from "../lib/images/libanese-resto.png"

	let container;
	let map;
	let zoom = 21;
  let center = {lat: 48.878585, lng: 2.325271};
	let input;

</script>

<div class="restaurant-card">
	<img class="image-du-resto"src={cardImg} alt=""/>
	<div class="details-container">
	<p class="card-title">
		MAGASIN DE POULET
		</p>
		<p class="emoji-de-lenfer">
			😍
			🫃🏻
			💸
			🤤
		</p>
		<p class="pas-de-marge">
			voir en details =>
		</p>
	</div>
</div>

<style>
	.restaurant-card {
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 8px;
			gap: 8px;
			width: 90%;
			height: 180px;
			background: #EDF1D6;
			border-radius: 8px;
	}
	.card-title {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 700;
		font-size: 26px;
		line-height: 24px;
		display: flex;
		align-items: center;
		letter-spacing: -0.017em;
		color: #000000;
		margin: 0;
		padding: 0;
	}
	.image-du-resto {
		height:95%;
	}
	.details-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 16px;
		width:70%;
		height: 100%;
	}
	.emoji-de-lenfer {
		font-size: 50px;
		margin: 0;
		padding: 0;
	}
	.pas-de-marge {
		margin: 0;
		padding: 0;
		align-self: flex-end;
	}

</style>
