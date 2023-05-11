import React, {useRef} from 'react'
import styles from './GameField.module.scss'
import Button from '../Button/Button'

import clsx from 'clsx'
import Circle from '../Circle/Circle'
import { fieldGameSize } from '../../utils/utils'

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
  const gameFieldRef = useRef<HTMLDivElement | null>(null)
  const gameFieldSize = fieldGameSize(gameFieldRef.current)

  return (
    <div className={clsx(styles.content, statusGame && 'game__start' )}>
        <Button statusGame={statusGame} setStatusGame={setStatusGame} />
        <div
          className={clsx(styles.game__field, statusGame && styles.game__start ) }
          id="game-field"
          ref={gameFieldRef}
        >
          {statusGame
            && <Circle
                 scoreClick={scoreClick}
                 setScoreClick={setScoreClick}
                 gameFieldSize={gameFieldSize}
               />
          }
        </div>
    </div>
  )
}

export default GameField