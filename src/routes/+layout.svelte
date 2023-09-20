<script>
  import Navbar from './Navbar.svelte';
  import './globals.scss';
</script>

<div class="app">
  <a id={'skipLink'} href="#content" tabIndex={0}> Skip to Content </a>

  <Navbar />

  <main id="content">
    <slot />
  </main>

  <footer>
    <p>spectre: Built by <a href="https://shivam.sh">Shivam Sh</a></p>
  </footer>
</div>

<style lang="scss">
  .app {
    min-height: 100vh;
    padding: 0;
    display: grid;
    grid-template-columns: min-content auto;
    grid-template-areas: 'sidebar main' 'sidebar footer';
    align-items: start;

    #content {
      min-height: 100vh;
      width: calc(100vw - 8rem);

      grid-area: main;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      overflow-y: auto;
      flex: 1;
    }

    footer {
      grid-area: footer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 12px;
    }
  }

  @media (max-width: 52rem) {
    .app {
      grid-template-areas: 'sidebar' 'main' 'footer';
      #content {
        width: 100vw;
      }
    }
  }
</style>
