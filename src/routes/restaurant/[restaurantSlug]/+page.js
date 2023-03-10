import { supabase } from "$lib/utils/SupabaseClient";

export async function load({ params }) {

  const { data, error } = await supabase
    .from("restaurants")
    .select(`
      *,
      reviews (
        *,
        profiles(
          id,
          lastname
        )
      )`)
    .eq('slug', params.restaurantSlug)
    .single();
  console.log(data)
  return { restaurant: data };
}