import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop'; // 💡 1. 引入剛剛寫好的重設器
import Home from './pages/Home';
import Works from './pages/Works';
import Exhibition from './pages/Exhibition';
import News from './pages/News';
import About from './pages/About';
import QA from './pages/QA';

export default function App() {
  return (
    <Router>
      {/* 💡 2. 裝在 Router 的第一線，確保它能抓到網址變化並第一時間重設捲軸 */}
      <ScrollToTop /> 
      
      <Navbar />
      
      <div style={{ width: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/qa" element={<QA />} />
        </Routes>
      </div>
    </Router>
  );
}