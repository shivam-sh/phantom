import { fetchProject } from '$lib/server/ghostData.server';
import { rehypeHTML } from '$lib/server/postprocessing.server.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageData} */
export async function load({ params }) {
  const post = await fetchProject(params.project).catch(() => {
    throw error(404, 'Page not found');
  });

  if (post.tags.some((tag) => tag.name === '#inline') && post.title != '(Untitled)') {
    post.html = `<h1 id="${post.title}">${post.title}</h1>` + post.html;
  }

  const source = String(await rehypeHTML(post.html));

  return {
    title: post.title,
    excerpt: post.excerpt,
    featureImage: post.feature_image,
    slug: post.slug,
    html: source
  };
}
