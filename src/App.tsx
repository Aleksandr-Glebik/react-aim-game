import React from 'react';
import './scss/app.scss';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1 id="time-header">
          Время игры:
          <span id="time"> 5.0</span>
        </h1>
        <h1 id="result-header">
          Результат игры:
          <span id="result"> 0</span>
        </h1>
      </div>
      <div className="app__content">
        <button className="btn" id="start-game">
          Начать
        </button>
        <div className="game__field" id="game-field">
        </div>
      </div>
      <div className="app__footer">
        <div className="input__container">
          <label
            htmlFor="game-time"
            className="input__container_label"
          >
            Время игры, (сек)
          </label>
          <input
            className="input__container_input"
            type="number"
            id="game-time"
            min="5"
            value={5}
            step="1"
          />
        </div>
      </div>
    </div>

  );
}

export default App;
