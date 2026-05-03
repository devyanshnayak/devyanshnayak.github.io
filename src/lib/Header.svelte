<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
</script>

<nav>
  <div>
    <button
      class="button"
      class:active={$page.url.pathname === "/"}
      on:click={() => goto("/")}
    >
      <img src="./home-light.svg" alt="home" />
      <p>home</p>
    </button>
    <button
      class="button"
      class:active={$page.url.pathname === "/"}
      on:click={() => goto("/about")}
    >
      <img src="./about-light.svg" alt="about" />
      <p>about</p>
    </button>
    <button
      class="button"
      class:active={$page.url.pathname === "/"}
      on:click={() => goto("/projects")}
    >
      <img src="./projects-light.svg" alt="projects" />
      <p>projects</p>
    </button>
    <button
      class="button"
      class:active={$page.url.pathname === "/"}
      on:click={() => goto("contact-me")}
    >
      <img src="./contact-light.svg" alt="contact" />
      <p>contacts</p>
    </button>
  </div>
  <div class="theam"></div>
</nav>

<style>
  .button {
    background-color: #6c6c6c4f;
    border-style: none;
    height: 75px;
    border-radius: 30%;
    aspect-ratio: 1/1;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .button img {
    width: 100%;
    height: 60%;
  }
  .button p {
    margin: 0;
    color: #ffffff;
  }
  .button:hover {
    background-color: #6c6c6c9c;
  }

  nav {
    border-radius: 50px;
    margin: 0;
    justify-content: center;
    align-items: center;

    display: flex;
  }
</style>
