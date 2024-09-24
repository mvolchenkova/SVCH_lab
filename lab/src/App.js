
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Card from './components/Card/Card.jsx'
import BecomeSponsor from './components/BecomeSponsor/BecomeSponsor.jsx'
import SupportBy from './components/SupportBy/SupportBy.jsx'


import './style/index.css'
import './style/adaptive.css'
import { Component } from 'react'

class App extends Component{
  render(){
    const name = "Become our sponsor";
  return (
    <>
      <Header/>
      <SupportBy/>
      <div className="cards">
        <Card/>
      </div>
      <BecomeSponsor name={name}/>
      <Footer/>
    </>
    
  );
  }
}
  


export default App;
