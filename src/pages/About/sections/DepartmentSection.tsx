import loadingMark from '../../../assets/images/decorations/03Loading .png';

export default function DepartmentSection() {
  return (
    <section className="about-panel about-panel--dark department-panel" aria-labelledby="department-title">
      <img className="loading-mark" src={loadingMark} alt="" aria-hidden="true" />
      <h2 id="department-title" className="sr-only">關於科技系</h2>
      <p>本系根源於民國 42 年所成立的工業教育系「工藝教育組」，專責培育我國中學「工藝」課程之師資，配合課程內涵之調整與修訂，在民國 61 年更名為「工業技術教育組」，並於民國 71 年正式獨立設系為「工藝教育學系」，為配合學校藝術學院成立，本系隸屬於藝術學院。</p>
      <p>民國 80 年增設碩士班，民國 87 年增設博士班。隨著社會環境的變遷與課程改革的需求，外加上師資培育多元化的衝擊，在民國 83 年正式將系名更改為「工業科技教育學系」，專責培育中學「生活科技」課程之師資，民國 87 年本系改隸屬於當年新成立的科技學院。為符合本系培育科技產業教育訓練人才之目標，本系獲教育部同意，從 98 學年度起更名為「科技應用與人力資源發展學系」，並簡稱為科技系。</p>
      <p>為拓展本系畢業學生之就業機會並開啟本系畢業生至業界就業的契機，本系自民國 83 年開始，以既有的師資培育為基礎，先後在「大學部」實施課程分組，目前的大學部課程則分為「學習與科技組」及「設計與科技組」，以培養科技產業界所須之人力資源人才。在「碩士班」階段則先後規劃「科技與工程教育」、「人力資源」與「網路學習」等多元之課程內涵，協助學生發展各該領域之專業與研究能力；在「博士班」則設有「科技與工程教育」與「人力資源」兩組課程，培育各該領域之專業「教學」與「研究」之人才。</p>
    </section>
  );
}
