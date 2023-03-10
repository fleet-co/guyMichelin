import { createClient } from "@supabase/supabase-js";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const supabase = createClient(
    "https://qhdlalgoiabufsxbmeha.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoZGxhbGdvaWFidWZzeGJtZWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0Mzg1MjUsImV4cCI6MTk5NDAxNDUyNX0.OSUXbV-zMO3ZOuPWLD9XpTcDtAmdNf44FT13ZjEFZ-8"
  );
  const { data, error } = await supabase
    .from("restaurants")
    .select()
    .eq('slug', params.restaurantSlug)
    .single();

  return { restaurant: data };
}