import { Component } from 'react';
import './Menu.css'
import arrDown from '../images/Arrow - Down.png'

class Menu extends Component{
    render(){
        return(
            <>
            <div id="burger768">
                <div className="burger768back">
                    <a href="">Episodes</a>
                    <a href="../about/about.html">About</a>
                    <div className="moreLink">
                        <a href="">More</a>
                        <img src={arrDown} alt=""/>
                    </div>
                    <button className="recentButton AlternatesFont">
                        RECENT EPISODES
                    </button>
                    <button className="subscribeButton AlternatesFont">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </>
        )
    }
}
export default Menu;