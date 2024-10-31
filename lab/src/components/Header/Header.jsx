import './Header.css';
import { Link } from 'react-router-dom'; 
import Image from 'react-bootstrap/Image';
import ButtonGroup from '../../materialComponents/ButtonGroup/ButtonGroup'
import { useTranslation } from 'react-i18next';

export default function Header() {
  const {t,i18n} = useTranslation (); 
  const changelanguage = (language) => { 
 
    i18n.changeLanguage(language); 
  };
  return (
    <>
      <header className="AlternatesFont">
      <div className="logoLinks">
        <Link to="/">
          <Image src="./images/logo.png" alt="" className="logo" />
        </Link>
        <div className="headerLinks">
          <Link to="/episodes">{t("Episodes")}</Link> 
          <Link to="/about">{t("About")}</Link> 
          <div className="moreLink">
            <Link to="/news">{t("More")}</Link> 
            <Image src="./images/Arrow - Down.png" alt="" />
          </div>
          <select
            name=""
            id=""
            onChange={(e) => changelanguage(e.target.value)}
            defaultValue={i18n.language}
            className="language-select"
        >
            <option value="en">en</option>
            <option value="ru">ru</option>
        </select>
        </div>
      </div>
      <div id="menuDiv">
        <Image src="./images/menu.png" alt="" />
      </div>
      <div className="headerButtons">
        <ButtonGroup text1={t("RECENT EPISODES")} text2={t("SUBSCRIBE")}/>
      </div>
    </header>
    </>
  );
}