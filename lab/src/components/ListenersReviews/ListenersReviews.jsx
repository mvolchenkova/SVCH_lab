import '../ListenersReviews/ListenersReviews.css'
import Image from 'react-bootstrap/esm/Image'


export default function ListenersReviews(){
    return(
        <div className="fourthContainer">
            <Image src="./images/Sparkle.png" alt="" className="Sparkle"></Image>
            <p className="listeners">What our listeners say</p>
            <p className="platform">Their experience throughout every platform</p>
            <div className="slider1">
                <Image src="./images/slid1.png" alt=""></Image>
                <Image src="./images/slid2.png" alt=""></Image>
                <Image src="./images/slid3.png" alt=""></Image>
            </div>
            <div className="sliderButtons1">
                <Image src="./images/Arrow - Left Circle.png" alt=""></Image>
                <Image src="./images/Arrow - Right Circle.png" alt=""></Image>
            </div>
        </div>
    )
}