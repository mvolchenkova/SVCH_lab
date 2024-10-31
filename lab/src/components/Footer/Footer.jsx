import './Footer.css'
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/esm/Image';
import { useTranslation } from 'react-i18next';

export default function Footer(){
  const {t} = useTranslation();
        return(
            <footer>
              <div className="footerTopDivs">
                <div className="logoDiv">
                  <div className="footerLogoDiv">
                    <Image src="./images/logo.png" alt=""/>
                    <p>©2021.</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div>
                    <Image src="./images/twitter.png" alt=""/>
                    <Image src="./images/instagram.png" alt=""/>
                    <Image src="./images/tiktok.png" alt=""/>
                  </div>
                </div>
                <div>
                  <p>{t("About")}</p>
                  <p>{t("Testimonials")}</p>
                  <Link to="/cards">{t("Features")}</Link>
                </div>
                <div>
                  <p>{t("Episodes")}</p>
                  <Link to="/skeleton">
                    <p>{t("Pricing")}</p>
                  </Link>
                  <Link to="/blog">
                    <p>{t("Blog")}</p>
                  </Link>
                  
                </div>
                <div>
                  <div>
                    <p>{t("Listen to episodes on your fav platform:")}</p>
                    <div>
                      <Image src="./images/Google Podcast1.png" alt=""/>
                      <Image src="./images/Spotify2.png" alt=""/>
                      <Image src="./images/Youtube2.png" alt=""/>
                    </div>
                  </div>
                  <div>
                    <p>{t("App available on:")}</p>
                    <div>
                      <Image src="./images/app_store.png" alt=""/>
                      <Image src="./images/google_play.svg" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="HR3"></hr>
              <div className="line">
                <div className="Reserved">
                  <p>©2022. {t("All Rights Reserved.")}</p>
                  <p>Pod of Cast</p>
                </div>
                <p>{t("Terms • Privacy")}</p>
              </div>
            </footer>
        )
    }