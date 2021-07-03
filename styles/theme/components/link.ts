import { ColorMode } from "@chakra-ui/react";

export const Link = {
    baseStyle: {
      textDecoration: 'underline'
    },
    variants: {
      default: (colorMode: ColorMode) => ({
        color: colorMode === 'light' ? 'foreground.light' : 'foreground.dark'
      }),
      noStyle: {
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none'
        }
      },
      primary: (colorMode: ColorMode) => ({
        color: colorMode === 'light' ? 'red.light' : 'red.dark',
        textDecoration: 'none',
        _hover: {
          color: colorMode === 'light' ? 'red.light' : 'red.dark',
          textDecoration: 'underline'
        }
      }),
    },
    defaultProps: {
      variant: 'default'
    }
  };