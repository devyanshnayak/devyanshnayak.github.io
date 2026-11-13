<script>
  import '@fortawesome/fontawesome-free/css/all.min.css';
  export let title = ""; export let description = "";
  export let thumpath = "";
  export let url = "";
  export let gitlink = ""

</script>

<div class="card">
  {#if thumpath}
    <img src={thumpath} alt="card image" class="thum" />
  {/if}
  <div class="content">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
  <div class="links">
    {#if url}
      <a href={url} target="_blank" class="link">🔗 Link</a>
    {/if}
    {#if gitlink}
      <a href={gitlink} target="_blank" class="link"> <i class="fa-brands fa-github" style="font-size: 1.5rem;"></i> GitHub </a> 
    {/if}

  </div>
</div>
<style>
    .card {
    border: 1px solid var(--border-color, #e2e8f0);
    border-radius: 20px;
    background: #2b313a;
    transition: transform 0.2s ease;
    width: 60vw;
    height: 70vh;
    margin: 40px auto;
    

  }
  .card:hover {
    transform: translateY(-5px);
  }
  .thum {
      object-fit: cover;
      max-height: 70%;

      width: 100%;
    }
  .content {
    padding: 1rem;
  }
  h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
  }
  p {
    margin: 0 0 1rem 0;
    color: var(--text-muted, #4a5568);
  }
  .link {
    text-decoration: none;
    font-weight: 500;
    border-radius: 40px;
    background-color: #1f242b;
    padding: 10px 50px;
    margin: 10px 10px
    
  }
</style>


