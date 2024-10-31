import './Menu.css'
import arrDown from '../images/Arrow - Down.png'
import Image from 'react-bootstrap/esm/Image';
import Button from '../../materialComponents/Button/Button';
import { useTranslation } from 'react-i18next';

export default function Menu(){
    const {t} = useTranslation();
        return(
            <>
            <div id="burger768">
                <div className="burger768back">
                    <a href="">{t("Episodes")}</a>
                    <a href="../about/about.html">{t("About")}</a>
                    <div className="moreLink">
                        <a href="">{t("More")}</a>
                        <Image src={arrDown} alt=""/>
                    </div>
                    <Button color="#ffffff" text={t("RECENT EPISODES")}/>
                    <Button color="#ffffff" text={t("SUBSCRIBE")}/>
                </div>
            </div>
        </>
        )
    }