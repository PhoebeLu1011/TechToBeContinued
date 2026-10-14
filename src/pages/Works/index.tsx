export default function Works() {
  return (
    <div style={{ width: '100%', boxSizing: 'border-box', overflowX: 'hidden' }}>
      <div style={styles.block}>
        <span style={styles.text}>[ WORKS TOTAL - 作品總覽 ]</span>
      </div>
      <div style={styles.block} />
      <div style={{ ...styles.block, paddingBottom: '20vh' }} />
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
    color: 'rgba(100, 180, 255, 0.3)', // 淡淡的藍色字
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
  }
};
