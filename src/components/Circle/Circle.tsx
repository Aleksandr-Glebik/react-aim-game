import React from 'react'
import styles from './Circle.module.scss'

interface CirclePropsType {
    scoreClick: number
    setScoreClick: (value: number) => void
}

const Circle: React.FC<CirclePropsType> = ( {
    scoreClick,
    setScoreClick
} ) => {

  const handleClick = () => {
    setScoreClick(scoreClick + 1)
  }

  return (
    <div
      className={styles.circle}
      onClick={handleClick}
    ></div>
  )
}

export default Circle
