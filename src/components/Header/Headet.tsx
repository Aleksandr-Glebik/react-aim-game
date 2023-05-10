
import React from 'react'
import styles from './Header.module.scss'

interface HeaderPropsType {
  startGame: boolean
  gameTime: string
}

const Header: React.FC<HeaderPropsType> = ( { startGame, gameTime } ) => {
  return (
    <div className={styles.header}>
      {startGame && <h1
        id="time-header"
      >
        Время игры:
        <span id="time"> {gameTime}</span>
      </h1>}
      {!startGame && <h1
        id="result-header"
      >
        Результат игры:
        <span id="result"> 0</span>
      </h1>}
    </div>
  )
}

export default Header