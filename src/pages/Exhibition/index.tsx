export default function Exhibition() {
  return (
    <div style={{ width: '100%', boxSizing: 'border-box', overflowX: 'hidden' }}>
      {/* 區塊 1：專屬深綠漸層 */}
      <div style={{ ...styles.block, background: 'linear-gradient(180deg, #11291b, #1d3d2a)' }}>
        <span style={styles.text}>[ EXHIBITION INFO - 展場資訊 ]</span>
      </div>
      <div style={{ ...styles.block, background: 'linear-gradient(180deg, #1d3d2a, #121f16)' }} />
      <div style={{ ...styles.block, background: 'linear-gradient(180deg, #121f16, #121212)', paddingBottom: '20vh' }} />
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
    color: 'rgba(100, 255, 150, 0.3)', // 淡淡的綠色字
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
  }
};