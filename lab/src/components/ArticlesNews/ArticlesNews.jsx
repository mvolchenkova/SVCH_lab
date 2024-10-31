import '../ArticlesNews/ArticlesNews.css'
import Image from 'react-bootstrap/Image';
import Button from '../../materialComponents/Button/Button';
import { useTranslation } from 'react-i18next';

export default function ArticlesNews(){
  const {t} = useTranslation();
    return(
        <div>
          <div className="eighthContainer">
            <div>
              <p className="listeners">{t("Article and News")}</p>
              <p className="platform">{t("News, tips, tricks and more")}</p>
            </div>
            <div className="articlesDiv">
              <div className="articles">
                <div className="article article1">
                  <div>
                    <Image src="./images/imgg1.png" alt="" />
                    <p className="podcast">{t("PODCAST")}</p>
                    <p className="podcastDescr">{t("Setup your own podcast")}</p>
                    <p className="podcastLor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
                    <hr className="HR2"></hr>
                    <div>
                      <div>
                      <Button color="rgb(247,237,232)" text="business"/>
                      <Button color="rgb(247,237,232)" text="startup"/>
                      </div>
                      <p>{t("Sep")} 14, 2021</p>
                    </div>
                  </div>
                </div>
                <div className="article">
                  <div>
                    <Image src="./images/imgg2.png" alt="" />
                    <p className="tips">{t("TIPS & TRICK")}</p>
                    <p className="tipsDescr">{t("Doodle artwork 101")}</p>
                    <p className="tipsLor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
                    <hr className="HR2"></hr>
                    <div>
                      <div>
                      <Button color="rgb(247,237,232)" text="art"/>
                      <Button color="rgb(247,237,232)" text="creative"/>
                      </div>
                      <p>{t("Sep")} 12, 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="browseAllDiv">
            <Button color="#000000" text={t("BROWSE ALL")}/>
            </div>
          </div>
          <div className="scribbleDiv">
            <Image src="./images/Scribble.png" alt="" className="scribbleImg" />
          </div>
        </div>
    )
}