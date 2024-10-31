import React, { useEffect, useState } from 'react';
import Episode from '../Episode/Episode'
import '../RecentEpisodes/RecentEpisodes.css';

export default function EpisodeCard() {
    

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


    return (
            <div className="cardsDiv">
                
                    <Episode />
              
            </div>        
    );
}