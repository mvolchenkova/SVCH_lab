
import '../style/index.css'
import '../style/adaptive.css'
import logo from'../images/logo.png'
import arrDown from '../images/Arrow - Down.png'
import menu from '../images/menu.png'
import { Component } from 'react';

class Header extends Component{
    render(){
       return(
        <header class="AlternatesFont">
      <div class="logoLinks">
        <img src={logo} alt="" class="logo"/>
        <div class="headerLinks">
          <a href="../index/#slider">Episodes</a>
          <a href="../about/about.html">About</a>
          <div class="moreLink">
            <a href="">More</a>
            <img src={arrDown} alt=""/>
          </div>
        </div>
      </div>
      <div class="menuDiv">
        <img src={menu} alt=""/>
      </div>
      <div class="headerButtons">
        <button class="recentButton AlternatesFont">
          RECENT EPISODES
        </button>
        <button class="subscribeButton AlternatesFont">
          SUBSCRIBE
        </button>
      </div>
    </header>
    
    ) 
    }
}
export default Header;