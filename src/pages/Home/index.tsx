export default function Home() {
  return (
    // 外層容器，設定為滿版
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      
 
      <div style={{ ...styles.block, height: '100vh', zIndex: 1 }}>
        <span style={styles.text}>[ HERO VISUAL SECTION ]</span>
      </div>


      <div style={styles.block}>
        <span style={styles.text}>[ SECTION 1 ]</span>
      </div>


      <div style={styles.block}>
        <span style={styles.text}>[ SECTION 2 ]</span>
      </div>

      <div style={{ ...styles.block, paddingBottom: '20vh' }}>
        <span style={styles.text}>[ END ]</span>
      </div>
      
    </div>
  );
}

const styles = {
  block: {
    width: '100%',
    height: '60vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box' as const,
    position: 'relative' as const,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.15)', // 淡淡的灰色字，純粹用來辨識區塊
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
  }
};
