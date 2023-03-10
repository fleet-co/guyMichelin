<script>
    import { writable } from 'svelte/store';
    import PlaceService from '$lib/utils/PlaceService';
    import { supabase } from "$lib/utils/SupabaseClient";

    const restaurantInformation = writable({
        name: null,
        address: null,
    }) 

    let googleData;
    let suggestions = [];

    const handleChange = async (e) => {
        const placeService = new PlaceService();
        let suggestionsFromApi
        if ((e.target.value).length > 5) {
            suggestionsFromApi = await placeService.getPlaceIdFromText(e.target.value);
        }
        suggestions = suggestionsFromApi
    }

    const handleOnSubmit = async () => {
        const { data, error } = await supabase
        .from('restaurants')
        .insert( 
            {
            created_at: new Date(), 
            name: $restaurantInformation.name,
            address:$restaurantInformation.address,
            } 
        )
        return {data, error}
	}

    const handleSelect = async (suggestion) => {
        const placeId = suggestion.place_id;
        const addressFromApi = await placeService.getAddressForPlaceId(placeId);
        googleData = addressFromApi
    };
</script>


<h1>Create a restaurant</h1>
<div class="content">
    <label>Restaurant name</label>
    <input type="text" bind:value={$restaurantInformation.name}/>
    <label>Address</label>
    <input type="text" bind:value={$restaurantInformation.address} on:input={handleChange}/>
    {console.log(suggestions)}
    {#each suggestions as suggestion}
        {console.log("UNITAIRE",suggestion)}
        <!-- <p>{suggestion.description}</p> -->
    {/each}
    
    <div class='buttons'>
        <button on:click={handleOnSubmit}>create</button>
    </div>
</div>


<p>
	{JSON.stringify($restaurantInformation, 0, 2)}</p>


<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 150px;
    }
</style>

