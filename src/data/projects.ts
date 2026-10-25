import projectData from './projects.json';

const projectImageModules = import.meta.glob<string>(
  '../assets/images/projects/**/*.{png,PNG,jpg,JPG}',
  {
    eager: true,
    import: 'default',
    query: '?url',
  },
);

const resolveProjectImages = (projectId: string) => {
  const imageEntries = Object.entries(projectImageModules)
    .filter(([path]) => path.includes(`/projects/${projectId}/`));
  const logo = imageEntries.find(([path]) =>
    new RegExp(`/${projectId}-logo-01\\.(?:png|PNG|jpg|JPG)$`).test(path),
  )?.[1];
  const contentImages = imageEntries
    .map(([path, url]) => {
      const match = path.match(
        new RegExp(`/${projectId}-content-(\\d+)\\.(?:png|PNG|jpg|JPG)$`),
      );

      return match ? { index: Number(match[1]), url } : null;
    })
    .filter((image): image is { index: number; url: string } => image !== null)
    .sort((first, second) => first.index - second.index)
    .map(({ url }) => url);

  return [...(logo ? [logo] : []), ...contentImages];
};

export type Project = Omit<(typeof projectData)[number], 'images'> & {
  images: string[];
};

export const projects: Project[] = projectData.map((project) => ({
  ...project,
  images: resolveProjectImages(project.id),
}));

export default projects;
