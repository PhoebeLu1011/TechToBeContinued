import {
  trafficDirections,
  trafficMapEmbedUrl,
  trafficMapLinkUrl,
} from '../data/traffic';
import './TrafficSection.css';

export default function TrafficSection() {
  return (
    <section className="home-traffic" aria-labelledby="home-traffic-title">
      <h2 className="home-section-title" id="home-traffic-title">交通資訊</h2>

      <div className="home-traffic__content">
        <ul className="home-traffic__directions">
          {trafficDirections.map(({ mode, description }) => (
            <li key={mode}>
              <strong>{mode}</strong>
              <span>{description}</span>
            </li>
          ))}
        </ul>

        <div className="home-traffic__map-shell">
          <iframe
            className="home-traffic__map"
            src={trafficMapEmbedUrl}
            title="國立臺灣師範大學綜合大樓 Google 地圖"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <a
            className="home-traffic__map-link"
            href={trafficMapLinkUrl}
            target="_blank"
            rel="noreferrer"
          >
            在 Google 地圖中開啟 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
