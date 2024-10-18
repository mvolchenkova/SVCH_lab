import './Header.css';
import { Link } from 'react-router-dom'; 
import Button from '../../materialComponents/Button/Button';
import Image from 'react-bootstrap/Image';

export default function Header() {
  return (
    <>
      <header className="AlternatesFont">
      <div className="logoLinks">
        <Link to="/">
          <Image src="./images/logo.png" alt="" className="logo" />
        </Link>
        <div className="headerLinks">
          <Link to="/episodes">Episodes</Link> 
          <Link to="/about">About</Link> 
          <div className="moreLink">
            <Link to="/news">More</Link> 
            <Image src="./images/Arrow - Down.png" alt="" />
          </div>
        </div>
      </div>
      <div id="menuDiv">
        <Image src="./images/menu.png" alt="" />
      </div>
      <div className="headerButtons">
      <Button color="#000000" text="RECENT EPISODES"/>
      <Button color="#000000" text="SUBSCRIBE"/>
      </div>
    </header>
    </>
  );
}