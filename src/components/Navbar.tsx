import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        {/* 左側 Logo (當選單大開時隱藏，讓畫面更乾淨) */}
        <div style={{ ...styles.logo, visibility: isOpen ? 'hidden' : 'visible' }}>
          <Link to="/" style={styles.logoLink} onClick={closeMenu}>TechToBeContinued</Link>
        </div>

        {/* 右側：桌機版選單 */}
        <div style={styles.desktopMenu} className="desktop-only">
          <Link to="/" style={styles.link}>首頁</Link>
          <Link to="/works" style={styles.link}>作品總覽</Link>
          <Link to="/exhibition" style={styles.link}>展場資訊</Link>
          <Link to="/news" style={styles.link}>最新消息</Link>
          <Link to="/about" style={styles.link}>關於我們</Link>
          <Link to="/qa" style={styles.link}>Q&A</Link>
        </div>

        {/* 手機版：未開啟時的漢堡按鈕 */}
        {!isOpen && (
          <button style={styles.hamburger} onClick={() => setIsOpen(true)} aria-label="Open menu">
            ☰
          </button>
        )}
      </div>

      {/* 💡 滿版蓋台手機選單 */}
      {isOpen && (
        <div style={styles.mobileFullMenu}>
          {/* 右上角的關閉大 ✕ 按鈕 */}
          <button style={styles.closeButton} onClick={closeMenu} aria-label="Close menu">
            ✕
          </button>
          
          {/* 中央置中的選單連結 */}
          <div style={styles.mobileLinksContainer}>
            <Link to="/" style={styles.mobileLink} onClick={closeMenu}>Home</Link>
            <Link to="/works" style={styles.mobileLink} onClick={closeMenu}>作品總覽</Link>
            <Link to="/exhibition" style={styles.mobileLink} onClick={closeMenu}>展場資訊</Link>
            <Link to="/news" style={styles.mobileLink} onClick={closeMenu}>最新消息</Link>
            <Link to="/about" style={styles.mobileLink} onClick={closeMenu}>關於我們</Link>
            <Link to="/qa" style={styles.mobileLink} onClick={closeMenu}>Q&A</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 9999,
    boxShadow: 'none',
  },
  navContainer: {
    width: '100%',
    padding: '1.5rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box' as const,
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  logoLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  desktopMenu: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'nowrap' as const,
    alignItems: 'center',
  },
  link: {
    color: '#cccccc',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '1.75rem',
    cursor: 'pointer',
  },
  
  /* 💡 關鍵修正：手機版滿版蓋台選單樣式 */
  mobileFullMenu: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0f172a', // 採用你附圖中質感的深藍黑色
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',    // 垂直置中
    alignItems: 'center',        // 水平置中
    zIndex: 10000,               // 超高層級，凌駕在一切之上
    boxSizing: 'border-box' as const,
  },
  closeButton: {
    position: 'absolute' as const,
    top: '1.5rem',
    right: '2rem',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '2rem',            // 大大的 ✕
    cursor: 'pointer',
  },
  mobileLinksContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '2.5rem',               // 增大間距，更有高級感
  },
  mobileLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.5rem',          // 放大字體方便點擊
    fontWeight: '300',           // 輕盈的字重，呼叫設計感
    transition: 'opacity 0.2s',
  }
};