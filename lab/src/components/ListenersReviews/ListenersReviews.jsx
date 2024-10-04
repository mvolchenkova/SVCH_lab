import sparkle from '../../images/Sparkle.png'
import slid1 from '../../images/slid1.png'
import slid2 from '../../images/slid2.png'
import slid3 from '../../images/slid3.png'
import arrowLeft from '../../images/Arrow - Left Circle.png'
import arrowRight from '../../images/Arrow - Right Circle.png'
import '../ListenersReviews/ListenersReviews.css'


export default function ListenersReviews(){
    return(
        <div className="fourthContainer">
            <img src={sparkle} alt="" className="Sparkle"></img>
            <p className="listeners">What our listeners say</p>
            <p className="platform">Their experience throughout every platform</p>
            <div className="slider1">
                <img src={slid1} alt=""></img>
                <img src={slid2} alt=""></img>
                <img src={slid3} alt=""></img>
            </div>
            <div className="sliderButtons1">
                <img src={arrowLeft} alt=""></img>
                <img src={arrowRight} alt=""></img>
            </div>
        </div>
    )
}