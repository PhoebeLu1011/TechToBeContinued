export default function Exhibition() {
  return (
    <div style={{ width: '100%', boxSizing: 'border-box', overflowX: 'hidden' }}>
      <div style={styles.block}>
        <span style={styles.text}>展場資訊 敬請期待</span>
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
    color: 'rgba(2, 18, 7, 0.3)', // 淡淡的綠色字
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
  }
};
