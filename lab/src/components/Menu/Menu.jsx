import './Menu.css'
import arrDown from '../images/Arrow - Down.png'
import Image from 'react-bootstrap/esm/Image';
import Button from '../../materialComponents/Button/Button';

export default function Menu(){
        return(
            <>
            <div id="burger768">
                <div className="burger768back">
                    <a href="">Episodes</a>
                    <a href="../about/about.html">About</a>
                    <div className="moreLink">
                        <a href="">More</a>
                        <Image src={arrDown} alt=""/>
                    </div>
                    <Button color="#ffffff" text="RECENT EPISODES"/>
                    <Button color="#ffffff" text="SUBSCRIBE"/>
                </div>
            </div>
        </>
        )
    }