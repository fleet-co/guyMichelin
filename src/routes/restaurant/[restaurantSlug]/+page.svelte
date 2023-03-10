<script>
  export let data;
  const restaurant = data.restaurant;
</script>

<img
  class="imageResto"
  src="https://www.bofrost.fr/medias/05236-FR-raviolis-au-fromage-tomate-et-basilic-pic1.jpg-W920xH575R1.6?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI1Njg3M3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2hlMi9oMGQvOTE4NjE4OTA4MjY1NC5qcGd8Y2EyMWM1YmVmZWIxMWUxNzA5YmFhZTE5NmJjYTk2NGVkY2YwMmEyZDRjYWEyMGVlZjIwNzNlM2QyMjQzMDI2YQ"
/>

<main>
  <h1>{restaurant?.name}</h1>
  <p>{restaurant?.address}</p>
  <h2>Autres avis</h2>
  {#each restaurant?.reviews as review}
    <div>
      <div class="review">
        <div>Avis {review.users.firstname}</div>
        <div class="critereWrapper">
          <div class="critere">
            😍
            <div>
              <span>{review.rating_qualite}</span>
            </div>
          </div>
          <div class="critere">
            💸
            <div>
              <span>{review.rating_prix}</span>
            </div>
          </div>
          <div class="critere">
            🫃🏻
            <div>
              <span>{review.rating_calage}</span>
            </div>
          </div>
          <div class="critere">
            😋
            <div>
              <span>{review.rating_regalade}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>"{review.comment}"</p>
        </div>
      </div>
    </div>
    <hr />
  {/each}
</main>

<style>
  main {
    padding: 24px;
  }
  .imageResto {
    width: 100%;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
  }
  .critereWrapper {
    display: flex;
    gap: 8px;
  }
  .review {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .critere {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
