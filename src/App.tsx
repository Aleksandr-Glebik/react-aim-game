import React, {useState} from 'react';
import './scss/app.scss';

import Header from './components/Header/Headet';
import GameField from './components/GameField/GameField';
import Footer from './components/Footer/Footer';

function App() {
  const [statusGame, setStatusGame] = useState(false)
  // console.log('statusGame', statusGame);
  const [gameTime, setGameTimer] = useState('5')
  // console.log('gameTime', gameTime);

  return (
    <div className="app">
      <Header
        statusGame={statusGame}
        gameTime={gameTime}
        setStatusGame={setStatusGame}
      />
      <GameField
        statusGame={statusGame}
        setStatusGame={setStatusGame}
      />
      <Footer
        statusGame={statusGame}
        gameTime={gameTime}
        setGameTimer={setGameTimer}
      />
    </div>
  );
}

export default App;
