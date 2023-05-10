import React, {useState} from 'react';
import './scss/app.scss';

import Header from './components/Header/Headet';
import GameField from './components/GameField/GameField';
import Footer from './components/Footer/Footer';

function App() {
  const [startGame, setStartGame] = useState(false)
  console.log('startGame', startGame);
  const [gameTime, setGameTimer] = useState('5')
  console.log('gameTime', gameTime);

  return (
    <div className="app">
      <Header
        startGame={startGame}
        gameTime={gameTime}
      />
      <GameField
        startGame={startGame}
        setStartGame={setStartGame}
      />
      <Footer
        startGame={startGame}
        gameTime={gameTime}
        setGameTimer={setGameTimer}
      />
    </div>
  );
}

export default App;
