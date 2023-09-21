import { fetchProjects } from '$lib/server/ghostData.server';

/** @type {import('./$types').PageData} */
export async function load() {
  const ghostProjects = await fetchProjects();
  const projects = [];

  for (const project of ghostProjects) {
    const localProject = {
      title: project.title,
      excerpt: project.excerpt,
      url: project.canonical_url != null ? project.canonical_url : project.url,
      featureImage: project.feature_image
    };
    projects.push(localProject);
  }

  return {
    projects
  };
}
