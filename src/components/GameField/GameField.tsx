import React from 'react'
import styles from './GameField.module.scss'
import Button from '../Button/Button'

import clsx from 'clsx'

interface GameFieldPropsType {
  statusGame: boolean
  setStatusGame: (value: boolean) => void
}

const GameField: React.FC<GameFieldPropsType> = ( { statusGame, setStatusGame } ) => {
  return (
    <div className={clsx(styles.content, statusGame && 'game__start' )}>
        <Button statusGame={statusGame} setStatusGame={setStatusGame} />
        <div
          className={clsx(styles.game__field, statusGame && styles.game__start ) }
          id="game-field"
        >
        </div>
    </div>
  )
}

export default GameField