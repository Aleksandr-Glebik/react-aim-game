
import React, {useState, useEffect} from 'react'
import styles from './Header.module.scss'

interface HeaderPropsType {
  statusGame: boolean
  gameTime: string
  scoreClick: number
  setStatusGame: (value: boolean) => void
}

const Header: React.FC<HeaderPropsType> = ({
  statusGame,
  gameTime,
  setStatusGame,
  scoreClick
}) => {
  const [timerValue, setTimerValue] = useState(gameTime)

  useEffect( () => {
    setTimerValue(gameTime)
  }, [gameTime])

  useEffect( () => {
    if (statusGame && +timerValue > 0) {
      const interval = setInterval(() => {
        setTimerValue(prev => (+prev - 0.1).toFixed(1).toString())
      }, 100)

      return () => clearInterval(interval)
    } else if (statusGame) {
      setTimerValue('0')
      setStatusGame(false)
    }
  }, [statusGame, timerValue, setStatusGame])

  return (
    <div className={styles.header}>
      {statusGame && <h1
        id="time-header"
      >
        Время игры:
        <span id="time"> {timerValue}</span>
      </h1>}
      {!statusGame && <h1
        id="result-header"
      >
        Результат игры:
        <span id="result"> {scoreClick}</span>
      </h1>}
    </div>
  )
}

export default Header