<script>
  import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
</script>

<div class="daddy">
  <h1 class="hello">
    hello
    <span class="wavehand">
      <DotLottieSvelte src="lottie.json" loop={false} autoplay />
    </span>
  </h1>
</div>

<style>
  .hello {
    display: flex;
  }
  .wavehand {
    height: 50px;
  }
  .daddy {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
