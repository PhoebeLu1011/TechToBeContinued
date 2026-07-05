export default function About() {
  return (
    <div style={{ width: '100%', boxSizing: 'border-box', overflowX: 'hidden' }}>
      {/* 區塊 1：專屬暖橘深色漸層 */}
      <div style={{ ...styles.block, background: 'linear-gradient(180deg, #2e1e11, #422b19)' }}>
        <span style={styles.text}>[ ABOUT US - 關於我們 ]</span>
      </div>
      <div style={{ ...styles.block, background: 'linear-gradient(180deg, #422b19, #21150c)' }} />
      <div style={{ ...styles.block, background: 'linear-gradient(180deg, #21150c, #121212)', paddingBottom: '20vh' }} />
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
  },
  text: {
    color: 'rgba(255, 180, 100, 0.3)', // 淡淡的橘色字
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
  }
};