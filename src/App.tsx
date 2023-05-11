import React, {useState} from 'react';
import './scss/app.scss';

import Header from './components/Header/Headet';
import GameField from './components/GameField/GameField';
import Footer from './components/Footer/Footer';

function App() {
  const [statusGame, setStatusGame] = useState(false)
  const [gameTime, setGameTimer] = useState('5')
  const [scoreClick, setScoreClick] = useState(0)

  return (
    <div className="app">
      <Header
        statusGame={statusGame}
        gameTime={gameTime}
        setStatusGame={setStatusGame}
        scoreClick={scoreClick}
      />
      <GameField
        statusGame={statusGame}
        setStatusGame={setStatusGame}
        scoreClick={scoreClick}
        setScoreClick={setScoreClick}
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
