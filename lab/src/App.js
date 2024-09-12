
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'
import Menu from './components/Menu.jsx'
import BecomeSponsor from './components/BecomeSponsor.jsx'

import './style/index.css'
import './style/adaptive.css'

function App() {
  return (
    <>
      <Header/>
      <div className="cards">
        <Card/>
      </div>
      <BecomeSponsor/>
      <Footer/>
    </>
    
  );
}

export default App;
