import './Card.css';
import Popup from 'reactjs-popup';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';


export default function Card() {
    const {t} = useTranslation();

    const [cards, addCards] = useState([]);
    const [cardName, changeCardName] = useState("");
    const [cardText, changeCardText] = useState("");
    const [newCardName, setNewCardName] = useState("");
    const [newCardText, setNewCardText] = useState("");
    

    useEffect(() => {
        const loadCards = () => {
            const savedCards = localStorage.getItem('cards');
            if (savedCards) {
                addCards(JSON.parse(savedCards));
            } else {
                fetchCards();
            }
        };

        const fetchCards = async () => {
            const response = await fetch('./jsonFiles/Cards.json');
            const result = await response.json();
            addCards(result);
            localStorage.setItem('cards', JSON.stringify(result));
        };

        loadCards();
    }, []);

    const updateCard = (newCardName, newCardText, id) => {
        addCards((prevState) => {
            const inx = prevState.findIndex((item) => item.id === id);
            const prevCard = prevState[inx];
            const newItem = { ...prevCard, cardName: newCardName, cardText: newCardText };
            const updatedCards = [...prevState.slice(0, inx), newItem, ...prevState.slice(inx + 1)];
            localStorage.setItem('cards', JSON.stringify(updatedCards));
            return updatedCards;
        });
    };

    const handleDeleteCard = (id) => {
        const newCards = cards.filter((card) => card.id !== id);
        addCards(newCards);
        localStorage.setItem('cards', JSON.stringify(newCards));
    };

    const handleAddCard = () => {
        const newCard = {
            id: Date.now(),
            cardName: newCardName,
            cardText: newCardText,
            image: images
        };

        const updatedCards = [...cards, newCard];
        addCards(updatedCards);
        localStorage.setItem('cards', JSON.stringify(updatedCards));

        setNewCardName("");
        setNewCardText("");
    };

    const handleSelect = (value) => {
        setImage(value);
        console.log("Selected image:", value);
    };

    const[images, setImage]=useState("")
    return (
        <>
            <div className="addCard">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {t("IMAGE")}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as="button" onClick={() => handleSelect('./images/img1.png')}>{t("Image")} 1</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleSelect('./images/img2.png')}>{t("Image")} 2</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleSelect('./images/img3.png')}>{t("Image")} 3</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleSelect('./images/img4.png')}>{t("Image")} 4</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleSelect('./images/img5.png')}>{t("Image")} 5</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleSelect('./images/img6.png')}>{t("Image")} 6</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
                <input
                    type="text"
                    value={newCardName}
                    onChange={(e) => setNewCardName(e.target.value)}
                    placeholder={t("Card Name")}
                />
                <input
                    type="text"
                    value={newCardText}
                    onChange={(e) => setNewCardText(e.target.value)}
                    placeholder={t("Card Text")}
                />
                <button className="button" onClick={handleAddCard}>{t("ADD CARD")}</button>
            </div>
            <div className="cardsDiv">
            {cards.map(item => (
                <div className="card" key={item.id}>
                    <img src={item.image} alt="" />
                    <p className="cardName">{item.cardName}</p>
                    <p>{item.cardText}</p>
                    <div className="buttonsDiv">
                        <Popup trigger={<button className="button">{t("CHANGE")}</button>} modal nested>
                            {close => (
                                <div className="modal">
                                    <input
                                        type="text"
                                        value={cardName}
                                        onChange={(e) => changeCardName(e.target.value)}
                                        placeholder={t("New Card Name")}
                                    />
                                    <input
                                        type="text"
                                        value={cardText}
                                        onChange={(e) => changeCardText(e.target.value)}
                                        placeholder={t("New Card Text")}
                                    />
                                    <button onClick={() => { updateCard(cardName, cardText, item.id); close(); }}>{t("SAVE")}</button>
                                </div>
                            )}
                        </Popup>
                        <button className="button" onClick={() => handleDeleteCard(item.id)}>{t("DELETE")}</button>
                    </div>
                </div>
            ))}
        </div>
        </>
        
    );
}