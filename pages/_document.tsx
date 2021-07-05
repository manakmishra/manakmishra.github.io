import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript, theme } from "@chakra-ui/react"

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <link href="https://api.fontshare.com/css?f[]=chillax@600&display=swap" rel="stylesheet" />
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}