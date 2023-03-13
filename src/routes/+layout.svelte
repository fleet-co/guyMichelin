<script>
  import Header from "./Header.svelte";
  import "./styles.css";

  import { user } from "../stores/authStore.js";
  import { supabase } from "$lib/utils/SupabaseClient";

  // user.set(supabase.auth.user());
  // console.log("initial", supabase.auth.user());

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session?.user);
    console.log("login stored : ", session?.user);
  });
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: "Inter", sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    font-size: 1em;
    font-family: inherit;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
