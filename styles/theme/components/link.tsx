import { ThemeComponentProps } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

export const Link = {
    baseStyle: {
      textDecoration: 'underline'
    },
    variants: {
      default: (props: ThemeComponentProps) => ({
        color: mode('foreground.light', 'foreground.dark')(props),
      }),
      noStyle: {
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none'
        }
      },
      primary: (props: ThemeComponentProps) => ({
        color: mode('red.light', 'red.dark')(props),
        textDecoration: 'none',
        _hover: {
          color: mode('cyan.light', 'cyan.dark')(props),
          textDecoration: 'none'
        }
      }),
    },
    defaultProps: {
      variant: 'default'
    }
  };