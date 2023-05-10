
import React from 'react'
import styles from './Button.module.scss'

import clsx from 'clsx'

interface ButtonPropsType {
    startGame: boolean
    setStartGame: (value: boolean) => void
}

const Button: React.FC<ButtonPropsType> = ( { startGame, setStartGame } ) => {
  return (
    <button
        className={clsx(styles.btn, startGame && 'hide')}
        id="start-game"
        onClick={() => setStartGame(true)}
    >
        Начать
    </button>
  )
}

export default Button