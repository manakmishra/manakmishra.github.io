import type { AppProps } from 'next/app'
import { ChakraProvider, useColorMode } from "@chakra-ui/react"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import customTheme from '../styles/theme'
import {Global, css} from '@emotion/react'

const GlobalStyle: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? '#FAFAFA' : '#282C34'};
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}
export default MyApp
