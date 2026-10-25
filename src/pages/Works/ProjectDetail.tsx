import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useParams } from 'react-router-dom';
import projects from '../../data/projects';
import loadingIcon from '../../assets/images/decorations/03Loading .png';
import descriptionTopArrow from '../../assets/images/decorations/02箭頭二.png';
import descriptionBottomArrow from '../../assets/images/decorations/02箭頭三白.png';
import './project-detail.css';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(({ id }) => id === projectId);
  const imageCount = project?.images.length ?? 0;
  const [activeImage, setActiveImage] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!isImageExpanded) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsImageExpanded(false);
      }
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isImageExpanded]);

  useEffect(() => {
    if (imageCount <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % imageCount);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [activeImage, imageCount]);

  if (!project) {
    return (
      <main className="project-detail-page">
        <p className="project-detail-not-found">找不到這個作品。</p>
        <Link className="project-detail-back" to="/works">回作品總覽</Link>
      </main>
    );
  }

  const showImage = (index: number) => {
    setActiveImage((index + imageCount) % imageCount);
  };
  const selectImageAtPosition = (clientX: number, bounds: DOMRect) => {
    const position = Math.min(Math.max((clientX - bounds.left) / bounds.width, 0), 1);
    showImage(Math.round(position * (imageCount - 1)));
  };

  return (
    <main className="project-detail-page">
      <section className="project-gallery" aria-label={`${project.title}作品圖片`}>
        {imageCount > 0 ? (
          <>
            <div
              className="project-gallery-frame"
              onTouchStart={(event) => {
                touchStartX.current = event.changedTouches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                const endX = event.changedTouches[0]?.clientX;
                if (touchStartX.current !== null && endX !== undefined) {
                  const distance = endX - touchStartX.current;
                  if (Math.abs(distance) > 40) {
                    showImage(activeImage + (distance < 0 ? 1 : -1));
                  }
                }
                touchStartX.current = null;
              }}
            >
              {imageCount > 1 && (
                <button
                  className="project-gallery-arrow project-gallery-arrow-previous"
                  type="button"
                  onClick={() => showImage(activeImage - 1)}
                  aria-label="顯示上一張圖片"
                >
                  ‹
                </button>
              )}
              <div className="project-gallery-image-wrap">
                <button
                  className="project-gallery-image-button"
                  type="button"
                  onClick={() => setIsImageExpanded(true)}
                  aria-label={`全螢幕檢視第 ${activeImage + 1} 張圖片，共 ${imageCount} 張`}
                >
                  <img
                    className="project-gallery-image"
                    src={project.images[activeImage]}
                    alt={`${project.title}作品圖片 ${activeImage + 1}`}
                  />
                </button>
              </div>
              {imageCount > 1 && (
                <button
                  className="project-gallery-arrow project-gallery-arrow-next"
                  type="button"
                  onClick={() => showImage(activeImage + 1)}
                  aria-label="顯示下一張圖片"
                >
                  ›
                </button>
              )}
            </div>
            <div
              className="project-gallery-controls"
              aria-label="選擇作品圖片"
              onPointerDown={(event) => {
                event.currentTarget.setPointerCapture(event.pointerId);
                selectImageAtPosition(event.clientX, event.currentTarget.getBoundingClientRect());
              }}
              onPointerMove={(event) => {
                if (event.buttons === 1) {
                  selectImageAtPosition(event.clientX, event.currentTarget.getBoundingClientRect());
                }
              }}
            >
              {project.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={`project-gallery-indicator${index === activeImage ? ' is-active' : ''}`}
                  onClick={() => showImage(index)}
                  aria-label={`顯示第 ${index + 1} 張圖片`}
                  aria-current={index === activeImage ? 'true' : undefined}
                />
              ))}
            </div>
            {isImageExpanded && createPortal(
              <div
                className="project-image-lightbox"
                role="dialog"
                aria-modal="true"
                aria-label={`${project.title}作品圖片檢視`}
                onClick={() => setIsImageExpanded(false)}
              >
                <button
                  className="project-image-lightbox-close"
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsImageExpanded(false);
                  }}
                  aria-label="關閉全螢幕圖片"
                >
                  ×
                </button>
                <div className="project-image-lightbox-content" onClick={(event) => event.stopPropagation()}>
                  {imageCount > 1 && (
                    <button
                      className="project-image-lightbox-arrow project-image-lightbox-arrow-previous"
                      type="button"
                      onClick={() => showImage(activeImage - 1)}
                      aria-label="顯示上一張圖片"
                    >
                      ‹
                    </button>
                  )}
                  <img
                    className="project-image-lightbox-image"
                    src={project.images[activeImage]}
                    alt={`${project.title}作品圖片 ${activeImage + 1}`}
                  />
                  {imageCount > 1 && (
                    <button
                      className="project-image-lightbox-arrow project-image-lightbox-arrow-next"
                      type="button"
                      onClick={() => showImage(activeImage + 1)}
                      aria-label="顯示下一張圖片"
                    >
                      ›
                    </button>
                  )}
                </div>
              </div>,
              document.body,
            )}
          </>
        ) : (
          <div className="project-gallery-empty">COMING SOON</div>
        )}
      </section>

      <section className="project-information">
        <div className="project-information-rule">
          <span># Group {project.order}</span>
          <span className="project-information-wordmark">TECH TO BE CONTINUED</span>
        </div>

        <h1 className="project-detail-title">{project.title}</h1>

        <div className="project-detail-panels">
          <article className="project-description-panel">
            <img
              className="project-description-decoration project-description-decoration-top"
              src={descriptionTopArrow}
              alt=""
              aria-hidden="true"
            />
            <h2>// 作品簡介</h2>
            <p>{project.description}</p>
            <img
              className="project-description-decoration project-description-decoration-bottom"
              src={descriptionBottomArrow}
              alt=""
              aria-hidden="true"
            />
          </article>

          <aside className="project-team-panel">
            <img className="project-team-decoration" src={loadingIcon} alt="" aria-hidden="true" />
            <h2>製作團隊</h2>
            <div className="project-team-section">
              <h3>團隊成員</h3>
              <p>{project.members.map(({ name }) => name).join('、')}</p>
            </div>
            <div className="project-team-section">
              <h3>指導教授</h3>
              <p>{project.advisors.join('、')}</p>
            </div>
          </aside>
        </div>

        <Link className="project-detail-back" to="/works">» 回作品總覽</Link>
      </section>
    </main>
  );
}
