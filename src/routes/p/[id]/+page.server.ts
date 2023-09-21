import { fetchWithID } from '$lib/server/ghostData.server';
import { parseTOC, rehypeHTML } from '$lib/server/postprocessing.server.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageData} */
export async function load({ params }) {
  const post = await fetchWithID(params.id)
    .catch(() => {
      throw error(404, 'Post not found');
    });

  if (
    post.tags.some((tag) => tag.name === '#inline') &&
    post.title != '(Untitled)'
  ) {
    post.html = `<h1 id="${post.title}">${post.title}</h1>` + post.html;
  }

  const source = String(await rehypeHTML(post.html));
  const toc = await parseTOC(source);

  return {
    title: post.title,
    excerpt: post.excerpt,
    featureImage: post.feature_image,
    id: post.id,
    html: source,
    toc: toc,
  };
}