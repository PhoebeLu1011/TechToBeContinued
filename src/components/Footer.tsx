import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <strong>技續</strong>
        <strong>TECH TO BE CONTINUED</strong>
        <p>國立台灣師範大學 科技應用與人力資源發展學系 116級 畢業專題成果展覽</p>
      </div>
      <div className="site-footer__contact">
        <p>聯絡窗口</p>
        <p>總籌備組 // 展覽執行委員會</p>
        <p>公關信箱 // 待補</p>
        <p>聯絡電話 // 待補</p>
        <p>主辦系所 // 國立台灣師範大學 科技應用與人力資源發展學系</p>
        <a href="https://www.tahrd.ntnu.edu.tw/" target="_blank" rel="noreferrer">系所網站</a>
      </div>
      <div className="site-footer__venue">
        <p>展出場地</p>
        <p>國立台灣師範大學 綜合大樓 202</p>
        <p>臺北市大安區錦安里和平東路一段135號</p>
        <div className="site-footer__instagram">
          <p>追蹤專展 Instagram</p>
          <a href="https://www.instagram.com/ntnutahrd116_gradex?vrfl=MWVwOXhlam1tN2JxNA==" target="_blank" rel="noreferrer">@ntnutahrd116_gradex</a>
        </div>
      </div>
    </footer>
  );
}
