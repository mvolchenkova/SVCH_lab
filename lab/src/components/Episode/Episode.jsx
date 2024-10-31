import '../EpisodeCards/EpisodeCards.css'
import '../Episode/Episode.css'
import { addEpisode } from '../../slices/EpisodesSlice'; 
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function Episode(){
    const {t} = useTranslation();

    const dispatch = useDispatch();

    const handleAddClick = (id,title,image, description) => {
        dispatch(addEpisode({id,title,image, description}));
    };
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/jsonFiles/episodes.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCardData(data);
            } catch (error) {
                console.error('Error fetching the episodes:', error);
            }
        };

        fetchData();
        
    }, []);
    return(
        <div  className="episodes">
                        
                        {cardData.map(card =>(
                            <div className="card1TextDiv1 card135 card1" key={card.id}>
                                <div className="imgAndText">
                                    <img src={card.image} alt="" />
                                    <div>
                                        <p className="eps1">Eps. {card.id}</p>
                                        <p className="epsTitle">{card.title}</p>
                                        <p className="epsDescr">{card.description}</p>
                                    </div>
                                </div>
                                <hr className="HR"/>

                                <div className="hostedBy">
                                    <p>{t("Hosted by:")} </p>
                                    <img src="./images/host.png" alt="" />
                                    <button onClick={()=> handleAddClick(card.id, card.title,card.image, card.description,
                                     card.hostedBy, card.episode)} className="addButton">+</button>
                                </div>
                                
                                
                            </div> 
                        )
                        )}
                        
                           
        </div>
    )
}