<script>
  // @ts-nocheck
  import Restaurantcard from "./Restaurantcard.svelte";
  import Button from "../components/Button.svelte";
  import { goto } from "$app/navigation";

  export let restaurants;
  let searchRestaurant = "";
</script>

<p class="title">Guy Michelin</p>
<div class="verticalSeparator" />

<div class="horizontalContainer">
  <input class="mainInput" value={searchRestaurant} />
  <Button
    buttonText="Ajouter un Restaurant"
    onClick={() => goto("/restaurant_add")}
  />
</div>
{#each restaurants as restaurant}
  <Restaurantcard {restaurant} />
{/each}

<style>
  .mainInput {
    width: 80%;
    height: 20px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 12px;
    padding: 16px;
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
  .horizontalContainer {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
</style>
