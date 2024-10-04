import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'
import img6 from '../../images/img6.png'
import './Card.css'

import { useEffect, useState } from 'react'; 

export default function Card(){
        const cards=[
            {image: img1, cardName: 'Topic by Request', cardText: 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.'},
            {image: img2, cardName: 'Exclusive Content', cardText: 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.'},
            {image: img3, cardName: 'Join the Community', cardText: 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.'},
            {image: img4, cardName: 'Livestreaming Access', cardText: 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.'},
            {image: img5, cardName: 'Exclusive Episodes & Merch', cardText: 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.'},
            {image: img6, cardName: 'And much more!', cardText: 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.'}
        ]        
    

        return(
            cards.map(
            item=>(
                <div className="card">
                    <img src={item.image} alt=""/>
                    <p className="cardName">{item.cardName}</p>
                    <p>{item.cardText}</p>
                </div>
            )
        )
        )
    }