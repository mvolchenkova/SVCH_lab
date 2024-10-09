import './Header.css';
import { Link} from 'react-router-dom'; 

export default function Header() {
  return (
    <>
      <header className="AlternatesFont">
      <div className="logoLinks">
        <Link to="/">
          <img src="./images/logo.png" alt="" className="logo" />
        </Link>
        <div className="headerLinks">
          <Link to="/episodes">Episodes</Link> 
          <Link to="/about">About</Link> 
          <div className="moreLink">
            <Link to="/news">More</Link> 
            <img src="./images/Arrow - Down.png" alt="" />
          </div>
        </div>
      </div>
      <div id="menuDiv">
        <img src="./images/menu.png" alt="" />
      </div>
      <div className="headerButtons">
        <button className="recentButton AlternatesFont">
          RECENT EPISODES 
        </button>
        <button className="subscribeButton AlternatesFont">
          SUBSCRIBE
        </button>
      </div>
    </header>
    </>
  );
}