<script>
  import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
  import SEO from "$lib/components/SEO.svelte";
</script>

<SEO
  title="devyansh - linux Nerd & homelab Enthusiast"
  description="Kubernaties, linux and infrastructure projects."
  url="https://devyyansh.site"
  image="https://www.devyansh.site/og-image.png"
/>
<div class="daddy">
  <h1 class="hello">
    Hello!
    <span class="wavehand">
      <DotLottieSvelte src="lottie.json" loop={false} autoplay />
    </span>
  </h1>
  <p>It's Devyansh, i'm A Open Source and Linux Enthusiast</p>
  <p>
    Wellcome to My website and a small space <br /> Fell free to browse this site
    doesnt track you
  </p>
</div>

<style>
  .hello {
    display: flex;
    font-size: 50px;
  }
  .wavehand {
    height: 50px;
    margin: 0px;
  }
  .daddy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    align-items: center;
  }
  .daddy p {
    font-size: 19px;
  }
</style>
