import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = {
    ...chakraTheme.fonts,
    body: 'Poppins, Tahoma, sans-serif',
    heading: 'Poppins, Verdana, sans-serif'
}

const breakpoints = createBreakpoints({
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "72em"
});

const fluidType = (minFont: number, maxFont: number) => {
    let XX = 768 / 100
    let YY = (100 * (maxFont - minFont)) / (1920 - 768)
    let ZZ = minFont / 16
    return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`
  }

const overrides = {
    ...chakraTheme,
    fonts,
    breakpoints,
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
        extrabold: 800
    },
    fontSizes: {
        xs: fluidType(6, 12),
        sm: fluidType(7, 14),
        md: fluidType(8, 16),
        lg: fluidType(9, 18),
        xl: fluidType(10, 20),
        '2xl': fluidType(12, 24),
        '3xl': fluidType(14, 28),
        '4xl': fluidType(18, 36),
        '5xl': fluidType(20, 40),
        '6xl': fluidType(24, 48),
        '7xl': fluidType(32, 64),
        '8xl': fluidType(36, 72)
    }
}

const customTheme = extendTheme(overrides);

export default customTheme