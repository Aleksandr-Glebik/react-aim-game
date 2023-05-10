
import React from 'react'
import styles from './Button.module.scss'

import clsx from 'clsx'

interface ButtonPropsType {
    statusGame: boolean
    setStatusGame: (value: boolean) => void
}

const Button: React.FC<ButtonPropsType> = ( { statusGame, setStatusGame } ) => {
  return (
    <button
        className={clsx(styles.btn, statusGame && 'hide')}
        id="start-game"
        onClick={() => setStatusGame(true)}
    >
        Начать
    </button>
  )
}

export default Button