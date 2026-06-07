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
    <a href="mailto:devyanshnayak@gmail.com"> Devyanshnayak@gmail.com</a>
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
    <p>
      Instagram: &nbsp; <a
        href="https://www.instagram.com/devyansh_vishwakarma/"
        target="_blank"
      >
        ig:devyansh_vishwakarma</a
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
