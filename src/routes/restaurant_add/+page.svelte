<script>
    import { writable } from 'svelte/store';
    import PlaceService from '$lib/utils/PlaceService';
    import { supabase } from "$lib/utils/SupabaseClient";
    const placeService = new PlaceService();

    const restaurantInformation = writable({
        name: null,
        address: null,
        longitude: 0,
        latitude: 0,
        google_place_id:0,
    }) 

    let googleData;
    let suggestions;

    const handleChange = async (e) => {
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
            longitude: $restaurantInformation.longitude,
            latitude: $restaurantInformation.latitude,
            google_place_id: $restaurantInformation.google_place_id
            } 
        )
        return {data, error}
	}

    const handleSelect = async (suggestion) => {
        console.log(suggestion)
        const placeId = suggestion.place_id;
        const addressFromApi = await placeService.getAddressForPlaceId(placeId);
        googleData = addressFromApi
        $restaurantInformation.address = suggestion.description
        $restaurantInformation.latitude = googleData.lat
        $restaurantInformation.longitude = googleData.lng
        $restaurantInformation.google_place_id = suggestion.place_id
    };
</script>


<h1>Create a restaurant</h1>
<div class="content">
    <label>Restaurant name</label>
    <input type="text" bind:value={$restaurantInformation.name}/>
    <label>Address</label>
    <input type="text" bind:value={$restaurantInformation.address} on:input={handleChange}/>
    {#if suggestions}
        <ul>
            {#each suggestions as suggestion}
            <li><div on:click={handleSelect(suggestion)}>{suggestion.description}</div></li>
            {/each}
        </ul>
    {/if}

    <div class='buttons'>
        <button on:click={handleOnSubmit}>create</button>
    </div>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 150px;
    }
</style>

