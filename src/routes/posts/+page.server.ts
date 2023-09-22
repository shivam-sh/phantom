import { fetchPosts } from '$lib/server/ghostData.server';
import { format } from 'date-fns';

/** @type {import('./$types').PageData} */
export async function load() {
  const ghostPosts = await fetchPosts();
  const posts = [];

  for (const post of ghostPosts) {
    const inline = post.tags.some((tag) => tag.name === '#inline');
    const localPost = {
      title: post.title,
      excerpt: post.excerpt,
      date: format(new Date(post.published_at), 'dd-MM-yyyy'),
      inline: inline,
      html: inline ? post.html : null,
      url: post.canonical_url != null ? post.canonical_url : post.url,
      externalLink: post.canonical_url != null
    };
    posts.push(localPost);
  }

  return {
    posts
  };
}
