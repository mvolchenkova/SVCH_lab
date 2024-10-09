import './Footer.css'
import { luseEffect, useState } from 'react'; 
import {Link} from 'react-router-dom'

export default function Footer(){
        return(
            <footer>
      <div className="footerTopDivs">
        <div className="logoDiv">
          <div className="footerLogoDiv">
            <img src="./images/logo.png" alt=""/>
            <p>©2021.</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <img src="./images/twitter.png" alt=""/>
            <img src="./images/instagram.png" alt=""/>
            <img src="./images/tiktok.png" alt=""/>
          </div>
        </div>
        <div>
          <p>About</p>
          <p>Testimonials</p>
          <Link to="/cards">Features</Link>
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
              <img src="./images/Google Podcast1.png" alt=""/>
              <img src="./images/Spotify2.png" alt=""/>
              <img src="./images/Youtube2.png" alt=""/>
            </div>
          </div>
          <div>
            <p>App available on:</p>
            <div>
              <img src="./images/app_store.png" alt=""/>
              <img src="./images/google_play.svg" alt=""/>
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