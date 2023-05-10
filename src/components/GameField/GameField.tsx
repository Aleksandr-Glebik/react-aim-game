import React from 'react'
import styles from './GameField.module.scss'
import Button from '../Button/Button'

import clsx from 'clsx'

interface GameFieldPropsType {
  startGame: boolean
  setStartGame: (value: boolean) => void
}

const GameField: React.FC<GameFieldPropsType> = ( { startGame, setStartGame } ) => {
  return (
    <div className={clsx(styles.content, startGame && 'game__start' )}>
        <Button startGame={startGame} setStartGame={setStartGame} />
        <div
          className={clsx(styles.game__field, startGame && styles.game__start ) }
          id="game-field"
        >
        </div>
    </div>
  )
}

export default GameField