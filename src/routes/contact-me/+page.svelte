<script>
  import SEO from "$lib/components/SEO.svelte";
</script>

<SEO
  title="contact me"
  description="contact page to connect to devyansh"
  url="https://devyansh.site/contact-me"
/>
<div class="main">
  <div class="contact">
    <h1>Contact</h1>
    Email: &nbsp;
    <a href="mailto:hello@devyansh.site"> hello@devyansh.site</a>
    <p>
      Telegram: &nbsp; <a href="https://t.me/devyansh_nayak" target="_blank">
        @devyansh_nayak</a
      >
    </p>

    <p>
      GitHub: &nbsp; <a href="https://github.com/devyanshnayak" target="_blank">
        devyanshnayak</a
      >
    </p>
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
</style>
