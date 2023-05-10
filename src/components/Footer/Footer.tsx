
import React from 'react'
import styles from './Footer.module.scss'

interface FooterPropsType {
    startGame: boolean
    gameTime: string
    setGameTimer: (value: string) => void
}

const Footer: React.FC<FooterPropsType> = ( { startGame, gameTime, setGameTimer } ) => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <label
                htmlFor="game-time"
                className={styles.container__label}
            >
                Время игры, (сек)
            </label>
            <input
                className={styles.container__input}
                type="number"
                id="game-time"
                min="5"
                // defaultValue={gameTime}
                value={gameTime}
                onChange={(event) => setGameTimer(event.target.value)}
                step="1"
                disabled={startGame}
            />
        </div>
    </div>
  )
}

export default Footer
