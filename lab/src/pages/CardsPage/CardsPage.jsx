import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Card from '../../components/Card/Card.jsx'
import '../CardsPage/CardsPage.css'

export default function CardsPage(){
    return(
        <>
            <Header/>
            <div className="cardsDiv">
                <Card/>
            </div>
            <Footer/>
        </>
    )
}