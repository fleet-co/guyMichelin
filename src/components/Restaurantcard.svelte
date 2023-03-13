<script>
  import cardImg from "../lib/images/libanese-resto.png";
  import { goto } from "$app/navigation";
  export let restaurant;

  let container;
  let map;
  let zoom = 21;
  let center = { lat: 48.878585, lng: 2.325271 };
  let input;

  const getCalculatedScore = (criteria) => {
    const score =
      restaurant.reviews.reduce((acc, review) => acc + review[criteria], 0) /
      (restaurant.reviews.length + 1);
    return score.toFixed(0);
  };
</script>

<div class="restaurant-card">
  <img class="image-du-resto" src={cardImg} alt="" />
  <div class="details-container">
    <p class="card-title">{restaurant.name || "MAGASIN DE POULET"}</p>
    <div class="criteriaWrapper">
      <div class="criteriaContainer">
        <p class="emoji-de-lenfer">😍</p>
        <p class="ratingText">{getCalculatedScore("rating_qualite")}</p>
      </div>
      <div class="criteriaContainer">
        <p class="emoji-de-lenfer">🫃🏻</p>
        <p class="ratingText">{getCalculatedScore("rating_calage")}</p>
      </div>
      <div class="criteriaContainer">
        <p class="emoji-de-lenfer">💸</p>
        <p class="ratingText">{getCalculatedScore("rating_prix")}</p>
      </div>
      <div class="criteriaContainer">
        <p class="emoji-de-lenfer">🤤</p>
        <p class="ratingText">{getCalculatedScore("rating_regalade")}</p>
      </div>
    </div>
    <p class="pas-de-marge">
      <a
        class="lien-details"
        on:click={() => goto("/restaurant/" + restaurant.slug)}
        >voir en details -></a
      >
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
    background: #edf1d6;
    border-radius: 8px;
  }
  .card-title {
    font-family: "Inter";
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
    height: 95%;
  }
  .details-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    width: 70%;
    height: 100%;
  }
  .criteriaWrapper {
    display: flex;
    flex-direction: row;
  }
  .criteriaContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .emoji-de-lenfer {
    font-size: 24px;
    margin: 0;
    padding: 0;
  }
  .ratingText {
    margin: 0;
  }
  .pas-de-marge {
    margin: 0;
    padding: 0;
    align-self: flex-end;
  }
  .lien-details {
    cursor: pointer;
    color: black;
  }
</style>
