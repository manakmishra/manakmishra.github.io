import { theme as chakraTheme, ThemeConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { colors } from './colors'
import { fonts, fontSizes, fontWeights, textStyles } from './typography';

const config : ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const breakpoints = createBreakpoints({
  base: '0em',
  sm: '30em',
  md: '48em',
  lg: '80em',
  xl: '80em',
})

const Link = {
  baseStyle: {
    color: '#3CCF91',
    _hover: { color: '#F6A20E', textDecoration: 'none' },
  },
}

const overrides = {
  ...chakraTheme,
  config,
  components: {
    Link
  },
  colors,
  fonts,
  fontSizes,
  fontWeights,
  textStyles,
  breakpoints
}

const customTheme = extendTheme(overrides)

export default customTheme