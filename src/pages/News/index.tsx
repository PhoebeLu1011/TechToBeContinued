import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import newsTitle from '../../assets/images/titles/最新消息.png';
import newsArticles from '../../data/news';
import './news.css';

const pageSize = 6;

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(newsArticles.length / pageSize);
  const visibleArticles = newsArticles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const pageNumbers = pageCount <= 5
    ? Array.from({ length: pageCount }, (_, index) => index + 1)
    : [
        1,
        ...(currentPage <= 3
          ? [2, 3, 4]
          : currentPage >= pageCount - 2
            ? [pageCount - 3, pageCount - 2, pageCount - 1]
            : [currentPage - 1, currentPage, currentPage + 1]),
        pageCount,
      ];

  return (
    <main className="news-page">
      <header className="news-header">
        <h1 className="news-header__title">
          <img src={newsTitle} alt="最新消息" />
        </h1>
      </header>

      <section className="news-list" aria-label="最新消息列表">
        {visibleArticles.length > 0 ? (
          visibleArticles.map((article) => (
            <article className="news-row" key={article.id}>
              <time className="news-row__date" dateTime={article.date}>
                {article.date}
              </time>
              <span className="news-row__category">{article.category}</span>
              <Link className="news-row__link" to={`/news/${article.id}`}>
                <span className="news-row__title">{article.title}</span>
                <span className="news-row__arrow" aria-hidden="true">→</span>
              </Link>
            </article>
          ))
        ) : (
          <p className="news-empty">目前沒有最新消息。</p>
        )}

        {pageCount > 1 && (
          <nav className="news-pagination" aria-label="最新消息分頁">
            <button
              className="news-pagination__arrow"
              type="button"
              aria-label="上一頁"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
            >
              ‹
            </button>
            {pageNumbers.map((page, index) => (
              <Fragment key={page}>
                {index > 0 && page - pageNumbers[index - 1] > 1 && (
                  <span className="news-pagination__ellipsis" aria-hidden="true">…</span>
                )}
                <button
                  className={`news-pagination__page${page === currentPage ? ' is-current' : ''}`}
                  type="button"
                  aria-current={page === currentPage ? 'page' : undefined}
                  aria-label={`第 ${page} 頁`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              </Fragment>
            ))}
            <button
              className="news-pagination__arrow"
              type="button"
              aria-label="下一頁"
              disabled={currentPage === pageCount}
              onClick={() => setCurrentPage((page) => page + 1)}
            >
              ›
            </button>
          </nav>
        )}
      </section>
    </main>
  );
}
