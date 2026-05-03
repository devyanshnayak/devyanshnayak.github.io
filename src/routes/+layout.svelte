<script>
  import favicon from "$lib/assets/favicon.png";
  import Header from "$lib/Header.svelte";
  import { page } from "$app/state";
  import { fade } from "svelte/transition";
  let { children } = $props();
  import BlogLink from "$lib/blog-link.svelte";
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>
<Header />
<BlogLink />
{#key page.url.pathname}
  <div in:fade={{ duration: 80, delay: 120 }} out:fade={{ duration: 120 }}>
    {@render children()}
  </div>
{/key}

<style>
  :global(html, body) {
    height: 100%;
    margin: 0;
  }

  :global(body) {
    display: flex;
    flex-direction: column;
    background-color: #1f2329;
    color: #fff;
  }
  :global(a) {
    color: #fff;
  }
</style>
