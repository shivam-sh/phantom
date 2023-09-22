<svelte:head>
  <title>Shivam Sh</title>
  <meta name="description" content="Shivam Sh's Personal Website" />
</svelte:head>

<section class="intro">
  <h2 class="title">
    Hey There<span class="accent-gradient">,</span> <br />
    I'm Shivam
  </h2>

  <q class="description">
    I’m a Systems Design Engineering{' '}
    <br />
    student at the University of Waterloo{' '}
    <br />
    I like exploring and creating with tech{' '}
    <br />
    and sometimes I post about it here
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
