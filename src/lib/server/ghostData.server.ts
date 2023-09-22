import GhostAdminAPI from '@tryghost/admin-api';
import { PUBLIC_SITE_URL } from '$env/static/public';
import { GHOST_URL, GHOST_ADMIN_API_KEY, VERCEL_URL } from '$env/static/private';

const api = new GhostAdminAPI({
  url: GHOST_URL,
  key: GHOST_ADMIN_API_KEY,
  version: 'v5.45'
});

export async function fetchPosts() {
  return await api.posts
    .browse({ limit: 'all', formats: ['html'], include: 'tags' })
    .then((posts) => {
      return posts.filter(
        (post) => post.tags.some((tag) => tag.name === '#post') && post.status === 'published'
      );
    })
    .then((posts) => {
      for (const post of posts) {
        if (post.url.startsWith(PUBLIC_SITE_URL)) {
          post.url = post.url.replace(PUBLIC_SITE_URL, '');
        } else if (VERCEL_URL && post.url.startsWith(VERCEL_URL)) {
          post.url = post.url.replace(VERCEL_URL, '');
        }
      }
      return posts;
    });
}

export async function fetchPost(slug: string) {
  return await api.posts
    .read({ slug, formats: ['html'], include: 'tags' })
    .then((post) => {
      if (!post.tags.some((tag) => tag.name === '#post')) {
        throw new Error('Not found');
      }
      return post;
    })
    .catch(() => {
      return Promise.reject('Not found');
    });
}

export async function fetchProjects() {
  return await api.posts
    .browse({ limit: 'all', formats: ['plaintext'], include: 'tags' })
    .then((projects) => {
      return projects.filter(
        (project) =>
          project.tags.some((tag) => tag.name === '#project') && project.status === 'published'
      );
    })
    .then((projects) => {
      for (const project of projects) {
        if (project.url.startsWith(PUBLIC_SITE_URL)) {
          project.url = project.url.replace(PUBLIC_SITE_URL, '');
        } else if (VERCEL_URL && project.url.startsWith(VERCEL_URL)) {
          project.url = project.url.replace(VERCEL_URL, '');
        }
      }
      return projects;
    });
}

export async function fetchProject(slug: string) {
  return await api.posts
    .read({ slug, formats: ['html'], include: 'tags' })
    .then((project) => {
      if (!project.tags.some((tag) => tag.name === '#project')) {
        throw new Error('Not found');
      }
      return project;
    })
    .catch(() => {
      return '';
    });
}

export async function fetchWithID(id: string) {
  return await api.posts
    .browse({ formats: ['html'], filter: `uuid:${id}` })
    .then((post) => post[0]);
}
