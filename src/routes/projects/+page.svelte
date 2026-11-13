<script>
  import SEO from "$lib/components/SEO.svelte";
  import Card from "$lib/components/Card.svelte"
  import Projects from "$lib/assets/data/Projects.json"
</script>

<SEO
  title="projects"
  description="Kuberneties, Linux, HomeLab and infrastructure projects."
  url="https://devyansh.site/projects"
/>

<section class="cards">
  {#each Projects as project }
    <Card
      title = {project.title}
      description = {project.description}
      thumpath = {project.thumpath}
      url = {project.url}
      gitlink = {project.gitlink}
    />
  {/each}
</section>

<style>
  
</style>
