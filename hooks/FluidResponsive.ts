export const clamp = (minValue: string, prefValue: string, maxValue: string) => {
    return `clamp(${minValue}, ${prefValue}, ${maxValue})`;
}

export const fluidType = (minFont: number, maxFont: number) => {
    let XX = 480 / 100
    let YY = (100 * (maxFont - minFont)) / (1552 - 480)
    let ZZ = minFont / 16
    return `calc(${ZZ}em + ((1vw - ${XX}px) * ${YY}))`
}
