import { Link, useParams } from 'react-router-dom';
import newsTitle from '../../assets/images/titles/最新消息.png';
import newsArticles from '../../data/news';
import './news.css';

export default function NewsDetail() {
  const { newsId } = useParams();
  const article = newsArticles.find(({ id }) => id === newsId);

  return (
    <main className="news-page">
      <header className="news-header">
        <h1 className="news-header__title">
          <img src={newsTitle} alt="最新消息" />
        </h1>
      </header>

      <article className="news-detail">
        {article ? (
          <>
            <Link className="news-detail__back" to="/news">
              <span aria-hidden="true">←</span>
              返回最新消息
            </Link>
            <div className="news-detail__meta">
              <time dateTime={article.date}>{article.date}</time>
              <span className="news-row__category">{article.category}</span>
            </div>
            <h2 className="news-detail__title">{article.title}</h2>
            <div className="news-detail__content">
              {article.content.map((paragraph, index) => (
                <p key={`${article.id}-paragraph-${index}`}>{paragraph}</p>
              ))}
            </div>
          </>
        ) : (
          <div className="news-detail__not-found">
            <h2>找不到這則最新消息。</h2>
            <Link className="news-detail__back" to="/news">
              <span aria-hidden="true">←</span>
              返回最新消息
            </Link>
          </div>
        )}
      </article>
    </main>
  );
}
