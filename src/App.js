import React, { useState } from 'react';
import Header from './Header';
import Card from './Card';
import './style/style.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const fillBestScore = (e) => {
    if (bestScore < e) {
      setBestScore(e);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className='App'>
      <Header bestScore={bestScore} score={score} />
      <Card
        increaseScore={increaseScore}
        fillBestScore={fillBestScore}
        setScore={setScore}
        resetScore={resetScore}
      />
    </div>
  );
};

export default App;
