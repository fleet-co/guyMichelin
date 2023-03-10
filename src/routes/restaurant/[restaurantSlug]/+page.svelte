<script>
  import Button from "../../../components/Button.svelte";
  import CriteriaSelector from "../../../components/CriteriaSelector.svelte";
  import { supabase } from "$lib/utils/SupabaseClient";

  export let data;
  const restaurant = data.restaurant;

  let scores = {
    rating_calage: 3,
    rating_prix: 3,
    rating_qualite: 3,
    rating_regalade: 3,
  };

  let isReviewing = false;

  const handleChange = (criteria, score) => {
    scores[criteria] = score;
  };

  let addReview = async () => {
    await supabase.from("reviews").insert([
      {
        restaurant_id: restaurant.id,
        reviewer_id: "4c3d900b-2c72-46c9-87e3-93d9a4e29db8",
        ...scores,
      },
    ]);
  };
</script>

<main>
  <img
    class="imageResto"
    src="https://www.bofrost.fr/medias/05236-FR-raviolis-au-fromage-tomate-et-basilic-pic1.jpg-W920xH575R1.6?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI1Njg3M3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2hlMi9oMGQvOTE4NjE4OTA4MjY1NC5qcGd8Y2EyMWM1YmVmZWIxMWUxNzA5YmFhZTE5NmJjYTk2NGVkY2YwMmEyZDRjYWEyMGVlZjIwNzNlM2QyMjQzMDI2YQ"
  />
  <h1>{restaurant?.name}</h1>
  <p>{restaurant?.address}</p>
  <div class="titleReviewContainer">
    <h2>Autres avis</h2>
    <Button onClick={() => (isReviewing = !isReviewing)} />
  </div>
  {#if isReviewing}
    <div>
      {#each Object.entries(scores) as [criteria, score]}
        <div>{criteria}: {score}</div>
        <CriteriaSelector {criteria} onChange={handleChange} />
      {/each}
      <Button onClick={addReview} />
    </div>
  {/if}
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
    background-color: #edf1d6;
    height: 100vh;
  }

  .titleReviewContainer {
    display: flex;
    flex-direction: row;
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
