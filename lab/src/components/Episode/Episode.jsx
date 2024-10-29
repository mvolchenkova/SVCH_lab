import '../../components/EpisodeCard/EpisodeCard.css'
import Button from '../../materialComponents/Button/Button'
import { addEpisode } from '../../slices/EpisodesSlice'; 
import { useDispatch } from 'react-redux';

export default function Episode(props){

    const dispatch = useDispatch();

    const handleAddClick = (currentCard) => {
        dispatch(addEpisode(props.card));
    };
    return(
        <div  className="subDiv card135 card1">
                        <div className="card1TextDiv">
                            <img src={props.card.image} alt="" className="cov" />
                            <div className="epsButton">
                                <div className="buttonDiv">
                                    <p className="eps">{props.card.episode}</p>
                                    <Button
                                        variant="light"
                                        onClick={handleAddClick(props.card)}
                                        className="epsBut"
                                        color="#ffffff"
                                        text="+"
                                    >
                                        
                                    </Button>
                                </div>
                               
                                <p className="card1Name">{props.card.title}</p>
                                <hr className="HR1" />
                                <p className="cardLorem">{props.card.description}</p>
                            </div>
                        </div>
                        <div className="hostedDiv">
                            <div>
                                {/* {props.card.tags.map((tag, index) => (
                                    <Button key={index} variant="light">{tag}</Button>
                                ))} */}
                            </div>
                            <div className="hosted">
                                <p>Hosted by: </p>
                                <img src={props.card.hostedBy} alt="" className="hostedImg" />
                            </div>
                        </div>
                    </div>
    )
}