<script>
  import favicon from "$lib/assets/favicon.svg";
  import Header from "$lib/Header.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>
<Header />
<main class="centered">
  {@render children()}
</main>

<style>
  :global body {
    /* background-image: url('/background.png'); */
    background-color: #1f2329;
    background-size: cover;
    background-attachment: fixed;
    color: #ffffff;
  }
  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
