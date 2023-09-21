<script>
  import Navbar from './Navbar.svelte';
  import './globals.scss';
  import './posts.scss';
  import './highlight.scss';
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" href="/favicon-96x96.png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
</svelte:head>

<div class="app">
  <a id={'skipLink'} href="#content" tabIndex={0}> Skip to Content </a>

  <Navbar />

  <main id="content">
    <slot />
  </main>

  <footer>
    <p>Spectre: Built by <a href="https://shivam.sh">Shivam Sh</a></p>
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
        padding-top: 3rem;
        width: 100vw;
      }
    }
  }
</style>
