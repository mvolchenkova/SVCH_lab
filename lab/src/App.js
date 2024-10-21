import News from './pages/News/News.jsx';
import Home from './pages/Home/Home.jsx';
import CardsPage from './pages/CardsPage/CardsPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import Blog from './pages/Blog/Blog.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './style/index.css';
import './style/adaptive.css';
import SubscribePage from './pages/SubscribePage/SubscribePage.jsx';

export default function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/subscribe" element={<SubscribePage />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}