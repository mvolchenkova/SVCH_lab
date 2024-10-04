import './Header.css'
import arrDown from '../../images/Arrow - Down.png'
import menu from '../../images/menu.png'
import logo from '../../images/logo.png'

import { useEffect, useState } from 'react'; 

export default function Header(){

       return(
        <header className="AlternatesFont">
      <div className="logoLinks">
        <img src={logo} alt="" class="logo"/>
        <div className="headerLinks">
          <a href="../index/#slider">Episodes</a>
          <a href="../about/about.html">About</a>
          <div className="moreLink">
            <a href="">More</a>
            <img src={arrDown} alt=""/>
          </div>
        </div>
      </div>
      <div id="menuDiv">
        <img src={menu} alt=""/>
      </div>
      <div class="headerButtons">
        <button className="recentButton AlternatesFont">
          RECENT EPISODES 
        </button>
        <button className="subscribeButton AlternatesFont">
          SUBSCRIBE
        </button>
      </div>
    </header>
    
    ) 
    }