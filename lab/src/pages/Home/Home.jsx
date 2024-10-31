import Header from '../../components/Header/Header.jsx'
import SupportBy from '../../components/SupportBy/SupportBy.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import BecomeSponsor from '../../components/BecomeSponsor/BecomeSponsor.jsx';
import EpisodeCard from '../../components/EpisodeCards/EpisodeCards.jsx';
export default function Home(){
    return(
        <>
            <Header />
            <SupportBy />
            <BecomeSponsor />
            <EpisodeCard />
            <Footer />
        </>
    )
}