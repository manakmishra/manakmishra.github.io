export const clamp = (minValue: number, prefValue: number, maxValue: number) => {
    return `clamp(${minValue}em, ${prefValue}vw, ${maxValue}em)`;
}

export const fluidType = (minFont: number, maxFont: number) => {
    let XX = 480 / 100
    let YY = (100 * (maxFont - minFont)) / (1552 - 480)
    let ZZ = minFont / 16
    return `calc(${ZZ}em + ((1vw - ${XX}px) * ${YY}))`
}
