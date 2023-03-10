// @ts-nocheck
import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;


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