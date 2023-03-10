<script>
  let clientError = "";
  let email;
  let password;
  let magic;

  const handleRegister = async () => {
    console.log("Register");
    console.log(email);
    console.log(password);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

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
  <meta name="description" content="Register page" />
</svelte:head>

<div class="text-column">
  {#if clientError}
    {clientError}
  {/if}
  <form on:submit|preventDefault={handleRegister}>
    <input type="input" name="email" bind:value={email} />
    <input type="password" name="password" bind:value={password} />
    <input type="submit" />
  </form>
</div>
