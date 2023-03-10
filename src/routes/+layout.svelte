<script>
  import Header from "./Header.svelte";
  import "./styles.css";

  import { user } from "../stores/authStore.js";
  import { supabase } from "$lib/utils/SupabaseClient";

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session?.user);
    console.log("login stored");
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

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
