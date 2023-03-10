<script>
  export let data;
  const restaurant = data.restaurant;
</script>

<h1>{restaurant?.name}</h1>
<p>{restaurant?.address}</p>

{#each restaurant?.reviews as review}
  <div>
    <span>Qualité</span>
    <span>{review.rating_qualite}</span>
  </div>

  <div>
    <span>Prix</span>
    <span>{review.rating_prix}</span>
  </div>

  <div>
    <span>Calage</span>
    <span>{review.rating_calage}</span>
  </div>

  <div>
    <span>Régalade</span>
    <span>{review.rating_regalade}</span>
  </div>

  <div>
    <p>"{review.comment}"</p>
    <div>{review.users.firstname}</div>
  </div>
{/each}
