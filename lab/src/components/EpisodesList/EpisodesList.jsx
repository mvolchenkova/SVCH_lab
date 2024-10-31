import React from 'react';
import { useSelector } from 'react-redux';
import './EpisodesList.css'
import { useDispatch } from 'react-redux';
import { removeEpisode, updateCard } from '../../slices/EpisodesSlice';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Popup} from 'reactjs-popup'

export default function EpisodesList() {

    const {t} = useTranslation();
    const selectedEpisodes = useSelector(state => state.episodes.episodesList);
    const dispatch = useDispatch();

    const HandleDeleteCard =(id)=>{ 
        console.log(1)
        dispatch(removeEpisode({id}));         
    }

    const [titleinput, settitle] = useState(''); 
    const [descriptioninput, setdescription] = useState(''); 

    const HandleSetTitleCard =(e) =>{ 
        settitle(e.target.value); 
    } 
    const HandleSetDescriptionCard =(e) =>{ 
        setdescription(e.target.value); 
    } 
    const HandeUpdateCard = (id) => { 
        dispatch(updateCard({ id, updatedData: { title: titleinput, description:descriptioninput} })); 
    };
    return (
        <div className="episodesList">
            <p className="epsLIstTitle">Episodes</p>
            {
                (!selectedEpisodes || selectedEpisodes.length === 0 ) ? (
                    <p className="nothing">Nothing added</p>
                ) : (
                    <div className="List">
                        {selectedEpisodes.map((card) => (
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
                                 <p>Hosted by: </p>
                                 <img src="./images/host.png" alt="" />
                                 <Popup trigger ={<button className='button-in-card open-redact-menu'>{t('Change properties')}</button>} modal nested>{ 
                            close=>( 
                                    <div className='modal-image'> 
                                        <input value="X" type="button" onClick={() => close()}>  

                                        </input> 
                                        
                                        <div> 
                                            <p>{t('Lets set a title')}</p> 
                                            <input type="text" className='modal-input input-title-card' onChange={HandleSetTitleCard}/> 
                                        </div> 
                                        <div> 
                                            <p>{t('Lets set a description')}</p> 
                                            <input type="text" className='modal-input input-price-card' onChange={HandleSetDescriptionCard}/> 
                                        </div> 
                                        <input type="button" value='Save' className='Save-card' onClick={() => HandeUpdateCard(card.id)}/>                          
                                    </div> 
                                ) 
                            } 
                            </Popup>

                                 <button onClick={()=>HandleDeleteCard(card.id)} className="deleteButton">DELETE</button>
                             </div>
                             
                             
                         </div> 
                        ))}
                    </div>
                )
            }
        </div>
    );
}