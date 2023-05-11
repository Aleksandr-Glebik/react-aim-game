export const getRandomValue = (min: number, max: number): number  => {
    let randomValue = min + Math.random() * (max + 1 - min)
    return Math.floor(randomValue)
}
export interface fieldGameSizeType {
    bottom: number
    height: number
    left: number
    right: number
    top: number
    width: number
    x: number
    y: number
}

export const fieldGameSize = (element: HTMLElement | null): fieldGameSizeType | null | undefined => {
    if (!element) return
    return element.getBoundingClientRect()
}