import loadingMark from '../../../assets/images/decorations/03Loading .png';

const teamGroups = [
  { title: '總籌組', members: '羅萲｜吳冠志' },
  { title: '美術編輯組', members: '＊吳念庭｜＊邱妍心｜呂雨璇｜張菀宸｜李佳璇｜柯亮宇｜蔡詠筑' },
  {
    title: '宣傳公關組',
    members: '＊周庭伊｜＊蔡柏元｜黃宇晟｜尤騰毅｜吳堉安｜洪明凱｜林宸安｜陳芷彤｜陳生好｜劉澤文｜林吟貞｜蔡廷軒｜唐湘婷｜康恩瑋｜林世軒｜李宛諭',
  },
  { title: '文件檔案組（文件組）', members: '＊廖盈琤｜＊巫冠儀｜王玟晽｜歐乃逸' },
  { title: '文件檔案組（網站組）', members: '＊盧姵帆｜＊邱鈺婷｜游靜靜｜謝博全｜樓冠佑' },
  {
    title: '展覽場務組',
    members: '＊劉文傑｜＊劉得誼｜黃柏彰｜廖振廷｜林渝桓｜李介文｜羅立茵｜周鈺軒｜潘苡晴｜陳楷荃｜李孟潔｜高郁城｜楊佳珣｜李東璟｜陳宥均',
  },
  { title: '總務組', members: '＊白振廷｜＊張語宸' },
];

export default function TeamSection() {
  return (
    <section className="about-panel about-panel--dark team-panel" aria-labelledby="team-title">
      <img className="loading-mark" src={loadingMark} alt="" aria-hidden="true" />
      <div className="team-heading"><h2 id="team-title">籌備團隊</h2><span>＊為組長</span></div>
      <div className="team-list">
        {teamGroups.map((group) => (
          <div className="team-group" key={group.title}><h3>{group.title}</h3><p>{group.members}</p></div>
        ))}
      </div>
    </section>
  );
}
