<script lang="ts">
  import Logo from './Logo.svelte';
  import { page } from '$app/stores';

  enum PageType {
    HOME = 'HOME',
    POSTS = 'POSTS',
    PROJECTS = 'PROJECTS',
    POST = 'POST',
    PROJECT = 'PROJECT',
    ABOUT = 'ABOUT',
    UNKNOWN = 'UNKNOWN'
  }

  const pathToPageTypeRegex = {
    [PageType.HOME]: /^\/$/,
    [PageType.POSTS]: /^\/posts$/,
    [PageType.PROJECTS]: /^\/projects$/,
    [PageType.ABOUT]: /^\/about$/,
    [PageType.POST]: /^\/posts\/[a-zA-Z0-9_-]+$/,
    [PageType.PROJECT]: /^\/projects\/[a-zA-Z0-9_-]+$/
  };

  export function currentPageType(path: string): PageType {
    const pageType =
      Object.entries(pathToPageTypeRegex).find(([, regex]) => regex.test(path))?.[0] ??
      PageType.UNKNOWN;

    return pageType as PageType;
  }

  $: pathname = $page.url.pathname;
  $: currentPage = currentPageType(pathname);
</script>

<header class="navbar">
  <a href="/" tabindex="-1"> <Logo /> </a>

  <nav class="links">
    <a href="/" class={currentPage === PageType.HOME ? 'selected' : ''}>
      <p class="linkText" id="homelink">
        <span>&nbsp;</span>home
      </p>
    </a>

    <a
      href="/posts"
      class={currentPage === PageType.POSTS || currentPage === PageType.POST ? 'selected' : ''}
    >
      <p class="linkText">
        <span>&nbsp;</span>posts
      </p>
    </a>

    <a
      href="/projects"
      class={currentPage === PageType.PROJECTS || currentPage === PageType.PROJECT
        ? 'selected'
        : ''}
    >
      <p class="linkText">
        <span>&nbsp;</span>projects
      </p>
    </a>

    <a href="/about" class={currentPage === PageType.ABOUT ? 'selected' : ''}>
      <p class="linkText">
        <span>&nbsp;</span>about
      </p>
    </a>
  </nav>
</header>

<style lang="scss">
  .navbar {
    grid-area: sidebar;
    height: 100%;
    min-width: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    padding: 1.5rem 2rem 2rem 2rem;
    background: none;

    z-index: 1;

    a {
      margin: 0;
      padding: 0;
      max-height: 2.375rem;
    }

    .links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      bottom: 2rem;
      position: fixed;

      background-color: var(--bg);
      border-radius: 0.5rem;
      padding: 0 0;
      gap: 2rem;

      a {
        text-decoration: none;
        color: var(--text);

        .linkText {
          display: flex;
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.25rem;
          color: var(--text);
          margin: 0;

          transition: gap 0.1s ease-in-out;
          gap: 0;

          span {
            display: inline-block;
            border-radius: 0.1rem;
            margin: 0;
            width: 0;
            opacity: 0;

            transition-property: all;
            transition-duration: 0.1s;
            transition-timing-function: ease-in-out;
          }
        }

        &:where(.selected),
        &:hover:where(:not(.selected)) {
          .linkText {
            gap: 0.3rem;
            span {
              background-color: var(--accent);
              height: auto;
              width: 0.2rem;
              opacity: 1;
            }
          }
        }
      }
    }
  }

  // medium to small screens
  @media (max-width: 52rem) {
    .navbar {
      flex-direction: row;
      height: auto;
      width: 100vw;

      padding: 1rem 1rem 1rem 1rem;
      background-color: var(--bg);

      position: fixed;

      .links {
        position: relative;
        flex-direction: row;
        bottom: auto;
        right: 1.5rem;

        a:first-child {
          display: none;
        }

        a {
          .linkText {
            gap: 0.1rem;
            display: flex;
            flex-direction: column-reverse;

            span {
              height: 3px;
            }
          }

          &:where(.selected),
          &:hover:where(:not(.selected)) {
            .linkText {
              gap: 0.1rem;
              span {
                width: 100%;
                height: 3px;
              }
            }
          }
        }
      }
    }
  }

  // very small screens
  @media (max-width: 32rem) {
    .navbar {
      padding: 1rem 0.3rem 0.8rem 1rem;
      .links {
        gap: 0.7rem;
      }
    }
  }
</style>
