<script lang="ts">
  export let title = "";
  export let description = "";
  export let url = "";
  export let image = "";
</script>

<svelte:head>
  <title>{title}</title>

  <meta name="description" content={description} />

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={image} />
  <meta property="og:type" content="website" />
</svelte:head>
