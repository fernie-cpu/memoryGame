import React, { useState, useEffect } from 'react';
import { cardData } from './cardData';

const Card = (props) => {
  const [clickCards, setClickCards] = useState([]);
  const randomCard = cardData;

  const shuffle = () => {
    for (let i = randomCard.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomCard[i], randomCard[j]] = [randomCard[j], randomCard[i]];
    }
  };

  useEffect(() => {
    shuffle();
  });

  const checkForPoint = (e) => {
    if (!clickCards.includes(Number(e.target.closest('.card').id))) {
      setClickCards((clickCards) => [
        ...clickCards,
        Number(e.target.closest('.card').id),
      ]);
      props.increaseScore();
    } else {
      props.fillBestScore(clickCards.length);
      props.resetScore();
      setClickCards([]);
    }
  };

  return (
    <div className='flexCard'>
      {randomCard.map((item) => {
        return (
          <div
            onClick={(e) => {
              checkForPoint(e);
            }}
            key={item.id}
            id={item.id}
            className='card'
          >
            <img className='imgCard' alt={item.text} src={item.img} />
            <div className='textCard'>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
