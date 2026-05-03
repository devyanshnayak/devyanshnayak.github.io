<a href="/blog">
  <div class="fab">
    <span class="label">My Blog <br /> Post</span>
    <img src="./blog.svg" alt="blog" class="icon" />
  </div>
</a>

<style>
  .fab {
    position: fixed;
    right: 20px;
    bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 60px;
    width: 60px; /* collapsed */
    padding: 2px;

    background: linear-gradient(88deg, #5f5f5fe8, #3e3e3e);
    border-radius: 50px;

    overflow: hidden;
    cursor: pointer;

    transition: width 0.35s ease;
  }

  /* expand left */
  .fab:hover {
    width: 150px;
  }

  .label {
    white-space: nowrap;
    margin-right: 10px;

    opacity: 0;
    transform: translateX(20px);

    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
  }

  /* reveal text */
  .fab:hover .label {
    opacity: 1;
    transform: translateX(0);
  }

  .icon {
    height: 50px;
    flex-shrink: 0;
    padding: 2px;
  }
</style>
