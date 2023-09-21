import GhostAdminAPI from '@tryghost/admin-api';

const api = new GhostAdminAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
  version: 'v5.45',
});

export async function fetchPosts() {
  return await api.posts
    .browse({ limit: 'all', formats: ['html'], include: 'tags' })
    .then((posts) => {
      return posts.filter(
        (post) => post.tags.some((tag) => tag.name === '#post') &&
          post.status === 'published'
      );
    })
    .then((posts) => {
      for (const post of posts) {
        if (post.url.startsWith(process.env.SITE_URL)) {
          post.url = post.url.replace(process.env.SITE_URL, '');
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
          project.tags.some((tag) => tag.name === '#project') &&
          project.status === 'published'
      );
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