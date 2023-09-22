<script>
  import { PUBLIC_SITE_URL } from '$env/static/public';
</script>

<svelte:head>
  <title>Home • Spectre</title>
  <meta name="description" content="A template made with SvelteKit, built for use with Ghost" />

  <meta property="og:sitename" content="Spectre" />
  <meta property="og:title" content="Home • Spectre" />
  <meta
    property="og:description"
    content="A template made with SvelteKit, built for use with Ghost"
  />
  <meta property="og:url" content={PUBLIC_SITE_URL} />
</svelte:head>

<section class="intro">
  <h2 class="title">
    This is<span class="accent-gradient">,</span> <br />
    Spectre
  </h2>

  <q class="description">
    A template built by <a href="https://shivam.sh">Shivam Sh</a> for my site.{' '}
    <br />
    Built to be widely extensible, customizable,{' '}
    <br />
    support light/dark themes, and be accessible.{' '}
    <br />
    Made with SvelteKit, built to work with Ghost.{' '}
  </q>
</section>

<style lang="scss">
  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;

    flex: none;
    order: 0;
    flex-grow: 0;

    .title {
      margin: 0;
      line-height: 1.4;
      font-family: 'Inter', sans-serif;

      span {
        color: var(--accent);
      }
    }

    .description {
      quotes: none;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.7;
    }

    // #bg_canvas {
    // 	bottom: 0;
    // 	left: 0;

    // 	max-height: 100vh;
    // 	overflow: hidden;
    // 	opacity: 0.3;

    // 	-webkit-user-select: none;
    // 	-moz-user-select: none;
    // 	user-select: none;
    // }
  }

  // @media (prefers-color-scheme: light) {
  // 	.intro {
  // 		#bg_canvas {
  // 			filter: invert(1);
  // 		}
  // 	}
  // }

  // screen width > 768px
  @media (min-width: 52rem) {
    .intro {
      flex-direction: row;
      align-items: center;
    }
  }

  // small screems
  @media (max-width: 39rem) {
    .intro > .description {
      font-weight: 600;
    }
  }
</style>
