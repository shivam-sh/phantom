<script>
  import '../../posts.scss';
  export let data;
</script>

<svelte:head>
  <title>{data.title ?? "Post not Found"}</title>
  <meta name="description" content={data.excerpt ?? 'The post you are looking was not found'} />

  <meta property="og:sitename" content="Spectre" />
  <meta property="og:title" content={data.title ?? "Post not Found"} />
  <meta property="og:description" content={data.excerpt ?? 'The post you are looking was not found'} />
  <meta property="og:image" content={data.featureImage} />
  <meta property="og:url" content={`${process.env.SITE_URL}/posts/${data.slug}`} />
</svelte:head>

<div class="table-of-contents">
  {#each data.toc as entry}
    <a data-sveltekit-replacestate href="/posts/{data.slug}/#{entry.id}" class="toc-entry">
      <p>
        {entry.text}
      </p>
    </a>
  {/each}
</div>

<div class="content">
  {@html data.html}
</div>
