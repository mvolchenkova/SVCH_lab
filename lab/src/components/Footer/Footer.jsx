
import './Footer.css'
import logo from '../../images/logo.png'
import twitter from '../../images/twitter.png'
import inst from '../../images/instagram.png'
import tiktok from '../../images/tiktok.png'
import googlePodcast from '../../images/Google Podcast1.png' 
import spotify from '../../images/Spotify2.png'
import youtube from '../../images/Youtube2.png'
import appstore from '../../images/app_store.png'
import googleplay from '../../images/google_play.svg'

import { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <footer>
      <div className="footerTopDivs">
        <div className="logoDiv">
          <div className="footerLogoDiv">
            <img src={logo} alt=""/>
            <p>©2021.</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <img src={twitter} alt=""/>
            <img src={inst} alt=""/>
            <img src={tiktok} alt=""/>
          </div>
        </div>
        <div>
          <p>About</p>
          <p>Testimonials</p>
          <p>Features</p>
        </div>
        <div>
          <p>Episodes</p>
          <p>Pricing</p>
          <p>Blog</p>
        </div>
        <div>
          <div>
            <p>Listen to episodes on your fav platform:</p>
            <div>
              <img src={googlePodcast} alt=""/>
              <img src={spotify} alt=""/>
              <img src={youtube} alt=""/>
            </div>
          </div>
          <div>
            <p>App available on:</p>
            <div>
              <img src={appstore} alt=""/>
              <img src={googleplay} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <hr className="HR3"></hr>
      <div className="line">
        <div className="Reserved">
          <p>©2022. All Rights Reserved.</p>
          <p>Pod of Cast</p>
        </div>
        <p>Terms • Privacy</p>
      </div>
    </footer>
        )
    }
}
export default Footer;