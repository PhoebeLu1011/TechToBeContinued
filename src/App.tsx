import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // 💡 1. 引入剛剛寫好的重設器
import Home from './pages/Home';
import Works from './pages/Works';
import ProjectDetail from './pages/Works/ProjectDetail';
import Exhibition from './pages/Exhibition';
import News from './pages/News';
import NewsDetail from './pages/News/Detail';
import About from './pages/About';
import QA from './pages/QA';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        {/* Reset scroll position whenever the route changes. */}
        <ScrollToTop />

        <Navbar />

        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:projectId" element={<ProjectDetail />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:newsId" element={<NewsDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/qa" element={<QA />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
