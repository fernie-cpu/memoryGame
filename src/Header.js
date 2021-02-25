import React from 'react';
import logo from './img/pepeOk.png';

const Header = (props) => {
  return (
    <header>
      <img alt='Pepe Emoji Memory Game' src={logo} />
      <div>
        <h1>Pepe Emoji Memory Game</h1>
        <p>Don't click the same image more than once.</p>
      </div>
      <div>
        <p>Max Score: 24</p>
        <p>Best Score: {props.bestScore}</p>
        <p>Current Score: {props.score}</p>
      </div>
    </header>
  );
};

export default Header;
