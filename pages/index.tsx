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
  return (
    <Container>
      <Head>
        <title>Home - Manak Mishra</title>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        mx="10vw"
        mt="5vh"
      >
        <Hero />
      </Stack>
    </Container>
  )
}
