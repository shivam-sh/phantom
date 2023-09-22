<script>
  import { PUBLIC_SITE_URL } from '$env/static/public';
  import '../../posts.scss';
  export let data;
</script>

<svelte:head>
  <title>{data.title ?? 'Page not Found'}</title>
  <meta name="description" content={data.excerpt} />

  <meta property="og:sitename" content="Spectre" />
  <meta property="og:title" content={data.title ?? 'Page not Found'} />
  <meta property="og:description" content={data.excerpt} />
  <meta property="og:image" content={data.featureImage} />
  <meta property="og:url" content={`${PUBLIC_SITE_URL}/p/${data.id}`} />
</svelte:head>

<div class="table-of-contents">
  {#each data.toc as entry}
    <a href="/posts/{data.id}/#{entry.id}" class="toc-entry">
      <p>
        {entry.text}
      </p>
    </a>
  {/each}
</div>

<div class="content">
  {@html data.html}
</div>
