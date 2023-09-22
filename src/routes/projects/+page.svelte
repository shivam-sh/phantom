<script>
  import { PUBLIC_SITE_URL } from '$env/static/public';
  export let data;
</script>

<svelte:head>
  <title>Projects • Spectre</title>
  <meta name="description" content="A list of some of my projects." />

  <meta property="og:sitename" content="Spectre" />
  <meta property="og:title" content="Projects • Spectre" />
  <meta property="og:description" content="A list of some of my projects." />
  <meta property="og:url" content={PUBLIC_SITE_URL + '/projects'} />
</svelte:head>

<div class="projects">
  <h3>Projects</h3>

  {#each data.projects as project}
    <a href={project.url}>
      <div class="project">
        <div class="imageContainer">
          <img src={project.featureImage ?? '/logo.png'} alt={project.title} class="image" />
        </div>

        <div class="info">
          <div class="text">
            <h4 class="title">{project.title}</h4>
            <q class="description">{project.excerpt}</q>
          </div>
        </div>
      </div>
    </a>
  {/each}
</div>

<style lang="scss">
  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.25rem;

    min-height: 100vh;
    width: 100%;

    padding: 1rem 3rem 6rem 1rem;
    margin: 0;

    * {
      width: min(100%, calc(1000px));
    }

    .project {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 1rem 0;
      border-radius: 1rem;
      transition-property: background-color;
      transition-duration: 0.05s;
      gap: 1rem;
      padding: 1.5rem 2rem 1.5rem 2rem;

      cursor: pointer;

      background-color: var(--bg-alt);

      &:hover {
        background-color: var(--secondary);
      }

      .imageContainer {
        max-width: 400px;
        width: 100%;
        height: auto;
        position: relative;
        aspect-ratio: 4 / 3;

        img {
          height: 100%;
          width: 100%;
          border-radius: 1rem;
          position: relative !important;
          object-fit: cover;
        }
      }

      .info {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        width: 400px;
        max-width: 90%;

        .text {
          display: flex;
          flex-direction: column;
          max-width: 300px;

          .title {
            flex: none;
            margin: 0.5rem 0 0.5rem 0rem;
          }

          .description {
            quotes: none;
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media (min-width: 39rem) {
    .projects > a:nth-child(2n + 1) > .project {
      flex-direction: row-reverse;
    }
  }

  @media (max-width: 52rem) {
    .projects > .project > .imageContainer {
      width: 70%;
    }
  }

  @media (max-width: 39rem) {
    .projects {
      padding: 1rem 1rem 3rem 0.5rem;

      .project {
        flex-direction: column;
        padding: 1rem;

        .imageContainer {
          max-width: 100%;
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
        }

        .info {
          width: 100%;
          max-width: 100%;

          .text {
            max-width: 100%;
          }
        }
      }
    }
  }
</style>
