import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../materialComponents/Button/Button'; 
import './EpisodesList.css'

export default function EpisodesList() {

    const selectedEpisodes = useSelector(state => state.episodes.episodesList);

    return (
        <div className="episodesList">
            <p>Episodes</p>
            {
                (!selectedEpisodes || selectedEpisodes.length === 0 ) ? (
                    <p>Nothing</p>
                ) : (
                    <div className="List">
                        {selectedEpisodes.map((card, index) => (
                             <div key={index} className="subDiv card135 card1">
                             <div className="card1TextDiv">
                                 <img src={card.image} alt="" className="cov" />
                                 <div className="epsButton">
                                     <div className="buttonDiv">
                                         <p className="eps">{card.episode}</p>
                                         <Button
                                             variant="light"
                                             className="epsBut"
                                             color="#ffffff"
                                             text="+"
                                         >
                                             
                                         </Button>
                                     </div>
                                    
                                     <p className="card1Name">{card.title}</p>
                                     <hr className="HR1" />
                                     <p className="cardLorem">{card.description}</p>
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
                                     <img src={card.hostedBy} alt="" className="hostedImg" />
                                 </div>
                             </div>
                         </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}