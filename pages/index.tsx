import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import { Hero } from '../components/hero';

export default function Index() {
  return (
    <Container>
      <Head>
        <title>Manak Mishra</title>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        mx={{ base: "5vw", md: "5vw", lg: "7.5vw" }}
      >
        <Hero />
      </Stack>
    </Container>
  )
}
