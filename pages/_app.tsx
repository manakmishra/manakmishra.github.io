import type { AppProps } from 'next/app'
import { ChakraProvider, useColorMode } from "@chakra-ui/react"
import "@fontsource/ubuntu/700.css"
import "@fontsource/dm-sans/400.css"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700.css"
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
            width: 100vw;
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? '#FAFAFA' : '#282C34'};
          }
          ::-webkit-scrollbar {
            width: 8px;
            background: ${colorMode === 'light' ? '#FAFAFA' : '#282C34'};
          }
          ::-webkit-scrollbar-thumb {
            background: ${colorMode === 'light' ? '#FAFAFA' : '#282C34'};
            border-radius: 8px;
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
