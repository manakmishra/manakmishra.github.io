import { theme as chakraTheme, ThemeConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { colors } from './colors'
import { fonts, fontSizes, fontWeights, textStyles } from './typography';
import { Link } from './components/link';

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const breakpoints = createBreakpoints({
  base: '0em',
  sm: '30em',
  md: '48em',
  lg: '80em',
  xl: '80em',
})

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