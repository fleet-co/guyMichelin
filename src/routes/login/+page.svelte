<script>
  import { createClient } from "@supabase/supabase-js";

  import {
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
  } from "$env/static/public";

  let clientError = "";
  let email;
  let password;

  const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

  const handleLogin = async () => {
    try {
      const { data: signInData, error } = supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(signInData);
      const { data: getSessionData, error: getSessionError } =
        await supabase.auth.getSession();
      console.log(getSessionData, getSessionError);

      if (error) {
        console.log(error);
        clientError = "Erreur de connexion";
      }
    } catch (e) {
      console.log(e);
      clientError = "Erreur de connexion";
    }
  };
</script>

<svelte:head>
  <title>Log In</title>
  <meta name="description" content="Login page" />
</svelte:head>

<div class="text-column">
  {#if clientError}
    {clientError}
  {/if}
  <form on:submit|preventDefault={handleLogin}>
    <input type="input" name="email" bind:value={email} />
    <input type="input" name="password" bind:value={password} />
    <input type="submit" />
  </form>
</div>
