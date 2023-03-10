<script>
  import { supabase } from "$lib/utils/supabase";

  let loading = false;
  let email;

  const handleLogin = async () => {
    const { error } = await supabase.auth.signIn({ email });
  };
</script>

<div class="text-column">
  {#if clientError}
    {clientError}
  {/if}
  <form on:submit|preventDefault={handleLogin}>
    <input type="input" name="email" bind:value={email} />
    <input type="submit" />
  </form>
</div>
