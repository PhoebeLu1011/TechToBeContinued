export default function QA() {
  return (
    <div style={{ width: '100%', boxSizing: 'border-box', overflowX: 'hidden' }}>
      {/* 區塊 1：Q&A 專屬深色漸層 */}
      <div style={{ ...styles.block, background: 'linear-gradient(180deg, #0f172a, #1e293b)' }}>
        <span style={styles.text}>[ Q&A - 常見問題 ]</span>
      </div>
      <div style={{ ...styles.block, background: 'linear-gradient(180deg, #1e293b, #0f172a)' }} />
      <div style={{ ...styles.block, background: 'linear-gradient(180deg, #0f172a, #121212)', paddingBottom: '20vh' }} />
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
    color: 'rgba(148, 163, 184, 0.3)', // 淡淡的藍灰色字
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
  }
};