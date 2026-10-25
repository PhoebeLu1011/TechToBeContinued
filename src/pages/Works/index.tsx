import projects from '../../data/projects';
import { Link } from 'react-router-dom';
import './works.css';

const titleImages = import.meta.glob<string>(
  '../../assets/images/titles/**/*.{png,jpg,jpeg,webp,avif,svg}',
  { eager: true, import: 'default', query: '?url' },
);

const decorationImages = import.meta.glob<string>(
  '../../assets/images/decorations/**/*.{png,jpg,jpeg,webp,avif,svg}',
  { eager: true, import: 'default', query: '?url' },
);

const projectLogoImages = import.meta.glob<string>(
  '../../assets/images/projects/**/*-[lL][oO][gG][oO]-01.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,avif,AVIF,svg,SVG}',
  { eager: true, import: 'default', query: '?url' },
);

const findProjectLogo = (projectId: string) => Object.entries(projectLogoImages).find(([path]) => {
  const normalizedPath = path.toLowerCase();
  const normalizedProjectId = projectId.toLowerCase();

  return normalizedPath.includes(`${normalizedProjectId}-logo-01.`);
})?.[1];

const worksTitle = Object.entries(titleImages).find(([path]) =>
  /作品|works|作品總覽/i.test(path),
)?.[1];
const rightArrow = Object.entries(decorationImages).find(([path]) =>
  path.includes('02箭頭二白.png'),
)?.[1];
const bottomArrow = Object.entries(decorationImages).find(([path]) =>
  path.includes('02箭頭三白.png'),
)?.[1];
const loadingIcon = Object.entries(decorationImages).find(([path]) =>
  path.includes('03Loading'),
)?.[1];

export default function Works() {
  return (
    <main className="works-page">
      <header className="works-header">
        {loadingIcon && (
          <img src={loadingIcon} alt="" aria-hidden="true" className="works-mark-left" />
        )}

        {worksTitle ? (
          <img src={worksTitle} alt="作品總覽" className="works-title-image" />
        ) : (
          <div className="works-title-fallback">
            <span className="works-title-fallback-small">WORKS TOTAL</span>
            <span>作品總覽</span>
          </div>
        )}

        {rightArrow && (
          <img src={rightArrow} alt="" aria-hidden="true" className="works-mark-right" />
        )}
      </header>

      <section className="works-section" aria-label="作品總覽">
        <div className="works-side-arrow" aria-hidden="true">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</div>
        {bottomArrow && (
          <img src={bottomArrow} alt="" aria-hidden="true" className="works-bottom-arrow" />
        )}

        <div className="works-grid">
          {projects.slice(0, 14).map((project, index) => (
            <article key={project.id} className="works-card">
              <Link
                className="works-image-link"
                to={`/works/${project.id}`}
                aria-label={`查看第 ${project.order ?? index + 1} 組：${project.title}`}
              >
                <div className="works-image-area">
                  {findProjectLogo(project.id) ? (
                    <img
                      className="works-project-image"
                      src={findProjectLogo(project.id)}
                      alt={`${project.title} Logo`}
                      loading="lazy"
                    />
                  ) : (
                    <span className="works-image-placeholder">COMING SOON</span>
                  )}
                </div>
              </Link>
              <h2 className="works-project-title" title={project.title}>{project.title}</h2>
              <p className="works-group-label"># Group {project.order ?? index + 1}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
