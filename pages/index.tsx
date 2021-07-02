import Head from 'next/head'
import {
  Text, 
  useColorMode,
  Stack,
  Flex,
  Heading
} from '@chakra-ui/react'
import Container from '../components/Container'

export default function Home() {

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
        m='0 auto 4rem auto'
        maxWidth="1400px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="1400px"
        >
          <Heading mb={2}>Hey There! I'm Manak Mishra</Heading>
          <Text>I’m currently a senior at LNMIIT, Jaipur studying Communication and Computer Engineering. I’m a self taught developer who loves building software and solving problems.</Text>
        </Flex>
      </Stack>
    </Container>
  )
}
