import React from 'react'
import styles from './GameField.module.scss'
import Button from '../Button/Button'

import clsx from 'clsx'
import Circle from '../Circle/Circle'

interface GameFieldPropsType {
  statusGame: boolean
  setStatusGame: (value: boolean) => void
  scoreClick: number
  setScoreClick: (value: number) => void
}

const GameField: React.FC<GameFieldPropsType> = ({
    statusGame,
    setStatusGame,
    scoreClick,
    setScoreClick
}) => {
  return (
    <div className={clsx(styles.content, statusGame && 'game__start' )}>
        <Button statusGame={statusGame} setStatusGame={setStatusGame} />
        <div
          className={clsx(styles.game__field, statusGame && styles.game__start ) }
          id="game-field"
        >
          {statusGame
            && <Circle
                 scoreClick={scoreClick}
                 setScoreClick={setScoreClick}
               />
          }
        </div>
    </div>
  )
}

export default GameField