<script>
  import favicon from "$lib/assets/favicon.png";
  import Header from "$lib/Header.svelte";
  import { page } from "$app/state";
  import { fade } from "svelte/transition";
  let { children } = $props();
  import BlogLink from "$lib/blog-link.svelte";
</script>

<svelte:head>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Devyansh",
      "url": "https://devyansh.site",
      "jobTitle": "IT Student",
      "knowsAbout": [
        "Linux",
        "Kubernetes",
        "DevOps",
        "Self Hosting",
        "Infrastructure Automation",
        "docker"
      ]
    }
  </script>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Devyansh.site",
      "url": "https://devyansh.site"
    }
  </script>
  <link rel="icon" href={favicon} />
  <title>Devyansh's portfolio</title>
  <meta
    name="description"
    content="Portfolio of Devynash. Linux enthusiast, homelab builder, kubernaties and infrastructure automation projects"
  />
  <meta property="og:site_name" content="Devi Portfolio" />

  <meta property="og:type" content="website" />
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
    overflow-y: hidden;
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
