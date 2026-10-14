import projectData from './projects.json';

const projectImageModules = import.meta.glob<string>(
  '../assets/images/projects/**/*.{png,jpg,jpeg,webp,avif}',
  {
    eager: true,
    import: 'default',
    query: '?url',
  },
);

const resolveProjectImage = (imagePath: string) => {
  const modulePath = `../assets${imagePath}`;
  const resolvedUrl = projectImageModules[modulePath];

  if (!resolvedUrl) {
    throw new Error(`找不到專題圖片：${imagePath}`);
  }

  return resolvedUrl;
};

export type Project = Omit<(typeof projectData)[number], 'images'> & {
  images: string[];
};

export const projects: Project[] = projectData.map((project) => ({
  ...project,
  images: project.images.map(resolveProjectImage),
}));

export default projects;
