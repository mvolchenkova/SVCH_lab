import './BecomeSponsor.css'
import Button from '../../materialComponents/Button/Button';
import Checkbox from '../../materialComponents/Checkbox/Checkbox';
import { useTranslation } from 'react-i18next';

export default function BecomeSponsor(){
        const {t} = useTranslation();
        return(
            <div className="seventhContainer" id="seventhContainer">
              <div>
                <p className="listeners">{t("Become our sponsor")}</p>
                <p className="platform">{t("Get exclusive episodes, merch and more")}</p>
              </div>
              <div className="allSponsorCards">
                <div className="sponsorCards">
                  <div className="spCard">
                    <div>
                      <p className="sponsorName">{t("Member")}</p>
                      <p className="spLor">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="subDiv">
                    <Button color="#000000" text={t("SUBSCRIBE")}/>
                      <div className="costSpons">
                        <p className="price">$9,99</p>
                        <p>{t("/month")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="spDescr">
                    <p>{t("What is included:")}</p>
                    <ul>
                      <li>{t("Exclusive Content")}</li>
                      <li>{t("5% Discount on Merch")}</li>
                      <li>{t("Join the Community")}</li>
                      <li>{t("Livestreaming Access")}</li>
                      <li>{t("Free tickets to Events")}</li>
                    </ul>
                  </div>
                </div>
                <div className="sponsorCards">
                  <div className="spCard spFam">
                    <div>
                      <div className="mostPop">
                        <p className="sponsorName">{t("Family")}</p>
                        <p className="mostPopular">{t("MOST POPULAR")}</p>
                      </div>
                      <p className="spLor">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="subDiv">
                    <Button color="#000000" text={t("SUBSCRIBE")}/>
                      <div className="costSpons">
                        <p className="price">$14,99</p>
                        <p>{t("/month")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="spDescr spFam">
                    <p>{t("What is included:")}</p>
                    <ul>
                      <li>{t("Everything in Tier 1")}</li>
                      <li>{t("Free tickets to Events")}</li>
                      <li>{t("Limited Edition Merch")}</li>
                      <li>{t("Promote your Product")}</li>
                      <li>{t("Request Topic")}</li>
                    </ul>
                  </div>
                </div>
                <div className="sponsorCards">
                  <div className="spCard">
                    <div>
                      <p className="sponsorName">{t("Official")}</p>
                      <p className="spLor">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="subDiv">
                    <Button color="#000000" text={t("SUBSCRIBE")}/>
                      <div className="costSpons">
                        <p className="price">$29,99</p>
                        <p>{t("/month")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="spDescr">
                    <p>{t("What is included:")}</p>
                    <ul>
                      <li>{t("Everything in Tier 2")}</li>
                      <li>{t("Exclusive Badge on Livestreaming")}</li>
                      <li>{t("Become an Official Sponsor")}</li>
                      <li>{t("Early Access to All Episodes")}</li>
                      <li>{t("Free Stikers and Merch")}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="divWithCheckbox">
                <Checkbox />
                <p>{t("I've read policy and User Agreement")}</p>
              </div>
            </div>
        )
    }