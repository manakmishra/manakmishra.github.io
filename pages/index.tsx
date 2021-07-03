import Head from 'next/head'
import {
  Text, 
  useColorMode,
  Stack,
  Flex,
  Box,
  Link
} from '@chakra-ui/react'
import Container from '../components/Container'
import { Hero } from '../components/Hero';

export default function Index() {

  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: '#0184BC',
    dark: '#61AFEF'
  }

  return (
    <Container>
      <Head>
        <title>Home - Manak Mishra</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        mx="10vw"
        mt="10vh"
      >
        <Hero />
      </Stack>
    </Container>
  )
}
