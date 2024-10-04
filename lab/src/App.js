
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Card from './components/Card/Card.jsx'
import BecomeSponsor from './components/BecomeSponsor/BecomeSponsor.jsx'
import SupportBy from './components/SupportBy/SupportBy.jsx'
import ListenersReviews from './components/ListenersReviews/ListenersReviews.jsx'
import RecentEpisodes from './components/RecentEpisodes/RecentEpisodes.jsx'


import './style/index.css'
import './style/adaptive.css'

export default function App(){
  return (
    <>
      <Header/>
      <SupportBy/>
      <div className="cards">
        <Card/>
      </div>
      <BecomeSponsor/>
      <ListenersReviews/>
      <RecentEpisodes/>
      <Footer/>
    </>
    
  );
  }
