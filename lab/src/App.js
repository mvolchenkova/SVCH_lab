import News from './pages/News/News.jsx';
import Home from './pages/Home/Home.jsx';
import CardsPage from './pages/CardsPage/CardsPage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Episodes from './pages/Episodes/Episodes.jsx';
import SubscribePage from './pages/SubscribePage/SubscribePage.jsx';
import Skeleton from './materialComponents/Skeleton/Skeleton.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js'; 

import './style/index.css';
import './style/adaptive.css';
import './i18n.js'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/skeleton" element={<Skeleton/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}