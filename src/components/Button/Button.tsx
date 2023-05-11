
import React from 'react'
import styles from './Button.module.scss'

import clsx from 'clsx'
interface ButtonPropsType {
    statusGame: boolean
    setStatusGame: (value: boolean) => void
    scoreClick: number
    setScoreClick: (value: number) => void
}

const Button: React.FC<ButtonPropsType> = ({
  statusGame,
  setStatusGame,
  scoreClick,
  setScoreClick
}) => {
  const handlerStartGame = () => {
    if (scoreClick !== 0) {
      setScoreClick(0)
    }
    setStatusGame(true)
  }

  return (
    <button
        className={clsx(styles.btn, statusGame && 'hide')}
        id="start-game"
        onClick={handlerStartGame}
    >
        Начать
    </button>
  )
}

export default Button