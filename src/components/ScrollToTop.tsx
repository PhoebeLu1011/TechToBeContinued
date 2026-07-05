import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // 監聽目前的網址路徑
  const { pathname } = useLocation();

  useEffect(() => {
    // 💡 關鍵：只要網址一變動，立刻將捲軸座標歸零 (拉回最頂部)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 這個元件不需要渲染任何畫面，它只負責執行上面的邏輯
}