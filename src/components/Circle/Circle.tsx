import React, { useEffect, useRef } from 'react'
import styles from './Circle.module.scss'

import { getRandomValue, fieldGameSizeType } from '../../utils/utils'
import { colorsArray } from '../../utils/constant'
interface CirclePropsType {
    scoreClick: number
    setScoreClick: (value: number) => void
    gameFieldSize?: fieldGameSizeType | undefined | null
}

const Circle: React.FC<CirclePropsType> = ( {
    scoreClick,
    setScoreClick,
    gameFieldSize,
} ) => {

  const randomCircleSizeRef = useRef<string |null>(null)
  const randomTopValueRef = useRef<string |null>(null)
  const randomLeftValueRef = useRef<string |null>(null)
  const randomColorRef = useRef<string |null>(null)

  const handleClickCircle = () => {
    setScoreClick(scoreClick + 1)
  }

  useEffect( () => {
    randomCircleSizeRef.current = getRandomValue(30, 100).toString()
    randomColorRef.current = colorsArray[getRandomValue(0, colorsArray.length)]

    if (gameFieldSize) {
      let maxTopValueRef = (gameFieldSize?.height - +randomCircleSizeRef.current)
      randomTopValueRef.current = getRandomValue(0, maxTopValueRef).toString()

      let maxLeftValueRef = (gameFieldSize?.width - +randomCircleSizeRef.current)
      randomLeftValueRef.current = getRandomValue(0, maxLeftValueRef).toString()
    }

  }, [scoreClick, gameFieldSize])

  return (
    <div
      className={styles.circle}
      onClick={handleClickCircle}
      style={{
        backgroundColor: `${randomColorRef.current}`,
        width: `${randomCircleSizeRef.current}px`,
        height: `${randomCircleSizeRef.current}px`,
        top: `${randomTopValueRef.current}px`,
        left: `${randomLeftValueRef.current}px`
      }}
    ></div>
  )
}

export default Circle
