<script>
  import { PUBLIC_SITE_URL } from '$env/static/public';
  export let data;
</script>

<svelte:head>
  <title>Posts • Spectre</title>
  <meta name="description" content="Some posts about topics that are on my mind" />

  <meta property="og:sitename" content="Spectre" />
  <meta property="og:title" content="Posts • Spectre" />
  <meta property="og:description" content="Some posts about topics that are on my mind" />
  <meta property="og:url" content={PUBLIC_SITE_URL + '/posts'} />
</svelte:head>

<div class="posts">
  <span class="inline">
    <h3>Posts</h3>
    <p class={'caption rssLink'}>
      <a href="/rss">RSS</a>
    </p>
  </span>

  {#each data.posts as post}
    {#if post.inline}
      <!-- INLINE POST -->
      <div class="inlinePost">
        {#if post.title != '(Untitled)'}
          <h4 class="title">
            <a href={post.url}>
              {post.title}
            </a>
          </h4>
        {/if}
        <div>
          {@html post.html}
        </div>
        <div class={`info footnote`}>
          <p>[{post.date}]</p>

          {#if post.externalLink}
            <p>
              <a href={post.url}> External Link </a>
            </p>
          {/if}
        </div>
      </div>
    {:else}
      <!-- NORMAL POST -->
      <a href={post.url}>
        <div class="post">
          <h5 class="title">
            <span class="accent">//</span>
            {post.title}
          </h5>
          <q class="description">
            {post.excerpt}
          </q>
          <div class={`info footnote`}>
            <p>[{post.date}]</p>

            {#if post.externalLink}
              <p>External Link</p>
            {/if}
          </div>
        </div>
      </a>
    {/if}
  {/each}
</div>

<style lang="scss">
  @import '../posts.scss';

  .posts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    min-height: 100vh;
    min-height: -webkit-fill-available;
    width: 100%;

    padding: 1rem 3rem 6rem 1rem;
    margin: 0;

    * {
      width: min(100%, 650px);
    }

    .inline {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;

      .rssLink {
        padding-right: 2.5rem;
        width: fit-content;
      }
    }

    .inlinePost {
      display: flex;
      flex-direction: column;
      padding: 0.5em 2em 0 2em;
      gap: 0rem;

      margin: 1em 0 1em 1em;
      border-left: var(--accent) 2px solid;

      transition-property: box-shadow;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;

      @include longform-text;

      .title {
        margin: 0;
        width: max-content;
        transition-property: color, box-shadow;
        transition-duration: 0.05s;
        box-shadow: inset 0 -0.1rem 0 var(--text-alt);
        font-weight: 700;

        &:hover {
          text-decoration: none;
          box-shadow: inset 0 -0.5rem 0 var(--accent);
        }
      }

      .info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin: 0;

        p {
          font-size: 0.8rem;
          color: var(--text-alt);
          font-weight: 700;
          width: fit-content;
          margin: 0;

          a:not(:hover) {
            box-shadow: none;
          }
        }
      }

      * {
        max-width: 100%;
        width: auto;
        height: auto;
      }

      figure > img {
        border-radius: 0.75rem;
      }
    }

    .post {
      display: flex;
      flex-direction: column;
      padding: 1.25rem 2rem;
      border-radius: 16px;
      transition-property: background-color;
      transition-duration: 0.05s;
      gap: 0rem;
      width: 100%;

      background-color: var(--bg-alt);

      &:hover {
        background-color: var(--secondary);
      }

      .title {
        margin: 0.5rem 0 0.5rem 0rem;
      }

      .description {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        quotes: none;
        font-size: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin: 0;

        p {
          font-size: 0.8rem;
          color: var(--text-alt);
          font-weight: 700;
          width: fit-content;
          margin: 0;
        }
      }
    }
  }

  @media (max-width: 52rem) {
    .posts {
      .post {
        padding: 1rem 1.5rem;
      }

      .title {
        font-size: 1.4rem;
      }

      .description {
        font-size: 1rem;
      }
    }
  }
</style>
