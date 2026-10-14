import conceptWordmark from '../../../assets/images/branding/01Tech to be continued.png';
import conceptMark from '../../../assets/images/branding/01技續＋畢業展.png';

export default function ConceptSection() {
  return (
    <section className="about-panel about-panel--concept" aria-labelledby="concept-title">
      <div className="concept-art" aria-hidden="true">
        <img className="concept-art__mark" src={conceptMark} alt="" />
        <img className="concept-art__wordmark" src={conceptWordmark} alt="" />
      </div>
      <div className="concept-copy">
        <h2 id="concept-title">以技為始，續向未來</h2>
        <p>在瞬息萬變的數位時代，科技的發展從來不是一個句點，而是一段不斷迭代、持續生成的過程。這些年來我們將積累的專業技術轉化為敏銳的社會觀察，並透過本次畢業專題展將技術向外輸出，我們以科技為筆，持續寫下與社會接軌的「下一章節」。</p>
        <p><strong>【以「技」為本】</strong>「技」代表科技系學生的硬實力。我們將嚴謹的技能、技術與專業能力轉化為解決現實痛點的具體方案。</p>
        <p><strong>【以「續」為能】</strong>「續」象徵軟實力的延展與迭代，我們將科技應用延伸至多樣化應用場景，打破單一學科界線，在不同領域間接續出跨域的影響力。</p>
        <p>「技續」表達的是我們如何以所學為基底，注入解決問題的溫度。我們誠摯邀請業界與大眾，共同見證這些創新點子，在未來持續發酵、創造更多商業與社會可能。</p>
      </div>
    </section>
  );
}
