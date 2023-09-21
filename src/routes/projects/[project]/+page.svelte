<script>
  import '../../posts.scss';
  export let data;
</script>

<svelte:head>
  <title>{data.title ?? "Project not Found"}</title>
  <meta name="description" content={data.excerpt ?? 'The project you are looking was not found'} />

  <meta property="og:sitename" content="Spectre" />
  <meta property="og:title" content={data.title ?? "Project not Found"} />
  <meta property="og:description" content={data.excerpt ?? 'The project you are looking was not found'} />
  <meta property="og:image" content={data.featureImage} />
  <meta property="og:url" content={`${process.env.SITE_URL}/projects/${data.slug}`} />
</svelte:head>

<div class="content">
  {@html data.html}
</div>
