import heroBrandArtwork from '../../assets/images/branding/figma-hero-brand.png';
import heroTechArtwork from '../../assets/images/branding/figma-hero-decoration.png';
import stripedArrow from '../../assets/images/decorations/02箭頭七.png';
import whiteArrow from '../../assets/images/decorations/02大白箭頭.png';
import sponsorArrow from '../../assets/images/decorations/02箭頭一.png';
import trafficMap from '../../assets/images/map-maker-taiwan-standard.png';
import { Link } from 'react-router-dom';
import newsArticles from '../../data/news';
import projects from '../../data/projects';
import './home.css';

const featuredProjectIds = [
  'project-04',
  'project-12',
  'project-11',
  'project-05',
  'project-08',
  'project-10',
];

const featuredProjects = featuredProjectIds.flatMap((id) => {
  const project = projects.find((item) => item.id === id);
  return project ? [project] : [];
});

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <img className="home-hero__striped-arrow" src={stripedArrow} alt="" aria-hidden="true" />

        <div className="home-hero__content">
          <img className="home-hero__glyph" src={heroTechArtwork} alt="" aria-hidden="true" />
          <img
            className="home-hero__artwork"
            src={heroBrandArtwork}
            alt="2026 GRADUATION EXHIBITION"
          />

          <dl className="home-hero__details">
            <div className="home-hero__detail">
              <dt>日期</dt>
              <dd>2026.12.12 - 12.13</dd>
            </div>
            <div className="home-hero__detail">
              <dt>地點</dt>
              <dd>國立台灣師範大學 綜合大樓 202</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="home-introduction" aria-labelledby="home-introduction-title">
        <div className="home-introduction__content">
          <h2 id="home-introduction-title">以技為始，續寫未來</h2>

          {/* Figma 目前使用重複的「展覽介紹」佔位字；以下沿用關於頁「專展理念」的現有文案。 */}
          <div className="home-introduction__copy">
            <p>
              在瞬息萬變的數位時代，科技的發展從來不是一個句點，而是一段不斷迭代、持續生成的過程。這些年來我們將積累的專業技術轉化為敏銳的社會觀察，並透過本次畢業專題展將技術向外輸出，我們以科技為筆，持續寫下與社會接軌的「下一章節」。
            </p>
            <p>
              「技」代表科技系學生的硬實力，我們將嚴謹的技能、技術與專業能力轉化為解決現實痛點的具體方案；「續」象徵軟實力的延展與迭代，將科技應用延伸至多樣化場景，在不同領域間接續出跨域的影響力。
            </p>
          </div>

          <Link className="home-introduction__more" to="/about">
            了解更多
          </Link>
        </div>

        <div className="home-introduction__ticker" role="region" aria-label="展出作品主題">
          <p className="home-introduction__visually-hidden">
            {featuredProjects.map(({ title }) => title).join('；')}
          </p>
          <div className="home-introduction__ticker-track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div className="home-introduction__ticker-group" key={copy}>
                {featuredProjects.map((project, index) => (
                  <span className="home-introduction__ticker-item" key={project.id}>
                    {index > 0 && <span className="home-introduction__ticker-separator">|</span>}
                    {project.title}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-schedule" aria-labelledby="home-schedule-title">
        <h2 className="home-schedule__visually-hidden" id="home-schedule-title">展覽日期與時間</h2>
        <div className="home-schedule__composition home-schedule__composition--top">
          <img className="home-schedule__arrow" src={whiteArrow} alt="" />
          <span className="home-schedule__date home-schedule__date--sat-top">12.12(Sat)</span>
          <span className="home-schedule__date home-schedule__date--sun-top">12.13(Sun)</span>
        </div>
        <article className="home-schedule__card" aria-label="展覽開放與閉幕時間">
          <h3 className="home-schedule__visually-hidden">展覽時間</h3>
          <span className="home-schedule__card-rule" aria-hidden="true" />
          <span className="home-schedule__card-divider home-schedule__card-divider--open" aria-hidden="true" />
          <span className="home-schedule__card-time home-schedule__card-time--open">10:00</span>
          <span className="home-schedule__card-label home-schedule__card-label--open">開放入場</span>
          <span className="home-schedule__card-divider home-schedule__card-divider--close" aria-hidden="true" />
          <span className="home-schedule__card-day home-schedule__card-day--sat">12.12 (Sat)</span>
          <span className="home-schedule__card-day home-schedule__card-day--sun">12.13 (Sun)</span>
          <span className="home-schedule__card-time home-schedule__card-time--sat">18:00</span>
          <span className="home-schedule__card-time home-schedule__card-time--sun">17:00</span>
          <span className="home-schedule__card-label home-schedule__card-label--close">展覽閉幕</span>
          <span className="home-schedule__card-footer-rule" aria-hidden="true" />
          <p className="home-schedule__card-note">* 17:00 展期正式落幕，感謝蒞臨指教</p>
        </article>
        <div className="home-schedule__composition home-schedule__composition--lower">
          <img className="home-schedule__arrow" src={whiteArrow} alt="" />
          <span className="home-schedule__date home-schedule__date--sat-lower">12.12(Sat)</span>
          <span className="home-schedule__date home-schedule__date--sun-lower">12.13(Sun)</span>
        </div>
      </section>

      <section className="home-news" aria-labelledby="home-news-title">
        <h2 className="home-section-title" id="home-news-title">最新消息</h2>
        <div className="home-news__list">
          {newsArticles.slice(0, 3).map((article) => (
            <article className="home-news__row" key={article.id}>
              <time dateTime={article.date}>{article.date}</time>
              <span className="home-news__category">{article.category}</span>
              <Link to={`/news/${article.id}`} className="home-news__link">
                <span>{article.title}</span><span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
        <Link className="home-news__more" to="/news">查看更多 <span aria-hidden="true">→</span></Link>
      </section>

      <section className="home-sponsors" aria-labelledby="home-sponsors-title">
        <div className="home-sponsors__bowl" aria-hidden="true" />
        <h2 className="home-section-title" id="home-sponsors-title">贊助廠商</h2>
        <img className="home-sponsors__arrow home-sponsors__arrow--left" src={sponsorArrow} alt="" />
        <div className="home-sponsors__logos" aria-label="贊助廠商標誌待補">
          {[1, 2, 3, 4, 5].map((item) => <div className="home-sponsors__placeholder" key={item} />)}
        </div>
        <img className="home-sponsors__arrow home-sponsors__arrow--right" src={sponsorArrow} alt="" />
      </section>

      <section className="home-traffic" aria-labelledby="home-traffic-title">
        <h2 className="home-section-title" id="home-traffic-title">交通資訊</h2>
        <div className="home-traffic__content">
          <ul className="home-traffic__directions">
            <li>搭乘捷運 • 松山新店線 古亭站：5 號出口步行約 7 分鐘即可到達</li>
            <li>搭乘公車 • 師大綜合大樓站：18、235、237、278、295、672、907、和平幹線</li>
            <li>自行開車 本校區設有地下收費停車場，導航至和平校區羅馬廣場地下停車場 收費方式：70 元每小時</li>
          </ul>
          <img className="home-traffic__map" src={trafficMap} alt="國立臺灣師範大學和平校區周邊地圖" />
        </div>
      </section>
    </main>
  );
}
